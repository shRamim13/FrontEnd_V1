import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-instructions',
  templateUrl: './exam-instructions.component.html',
  styleUrls: ['./exam-instructions.component.css'],
})
export class ExamInstructionsComponent implements OnInit {
  exId: any;
  title: any;
  description: any;
  exam: any;
  user: any = null;
  date: any;
  time: any;
  sysdate: any;
  systime: any;
  pipe = new DatePipe('en-US');

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private loginService: LoginService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initializeExamData();
    this.initializeUserData();
    this.initializeTimeData();
  }

  private initializeExamData(): void {
    this.exId = this.route.snapshot.params['exId'];
    this.title = this.route.snapshot.params['title'];

    this.examService.getExam(this.exId).subscribe(
      (data) => (this.exam = data),
      (error) => {
        console.log(error);
        alert('Error in loading exam data');
      }
    );
  }

  private initializeUserData(): void {
    this.user = this.loginService.getUser();
    this.date = this.pipe.transform(this.user.exam.date, 'longDate');
    this.time = this.user.exam.time;
  }

  private initializeTimeData(): void {
    const now = Date.now();
    this.sysdate = this.pipe.transform(now, 'longDate');
    const futureTime = new Date(Date.now() + 1 * 60000);
    this.systime = this.pipe.transform(futureTime, 'shortTime');
  }

  startExam(): void {
    Swal.fire({
      title: 'Do you want to start the exam?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/exam-start/' + this.exId]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  examTime(): void {
    if (this.systime > this.time) {
      this.router.navigate([
        '/exam-start/' + this.user.username + '/' + this.exId,
      ]);
    } else if (this.systime < this.time) {
      Swal.fire('Exam will start at ' + this.time, '', 'info');
      this.loginService.logout();
      this.location.back();
    }
  }
}
