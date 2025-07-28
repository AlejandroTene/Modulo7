import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { CourseComponent } from './app/components/course/course';

bootstrapApplication(CourseComponent, appConfig)
  .catch((err) => console.error(err));
