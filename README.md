# Angular Quiz Maker

- Single page trivia application created as an assignment project for [Level 2 Angular Certification](https://angulartraining.com/).
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.
- You can access live version of the app on [tomasbencko.github.io/angular-quiz-maker/](https://tomasbencko.github.io/angular-quiz-maker/).
- *Feedback is highly appreciated!*

## Project Setup
1. Install necessary packages using `npm install`.
2. Use `ng serve --open` to run the project locally.
3. Use `ng build --configuration=production` to build the project for production.

## Workspace Structure
```JS
/src/
  /app/
    /core/
      error-handler.service.ts
      quiz.service.ts
    /models/
      api.models.ts
      app.models.ts
    /pages/
      /quiz-page/
        /quiz-selection/
          quiz-selection.component.html|ts|scss
        quiz-page.component.html|ts|scss
      /quiz-results-page/
        quiz-results-page.component.html|ts|scss
    /shared/
      /button-wide/
        button-wide.component.html|ts|scss
      /question-list/
        question-list.component.html|ts|scss
      /question-list-item/
        question-list-item.component.html|ts|scss
      /question-answer/
        question-answer.component.html|ts|scss
      score-color.directive.ts
    /utils/
      sort.utils.ts
    app.component.html|ts|scss
    app.config.ts
    app.routes.ts
  /assets/
  /environments/
    environment.development.ts
    environment.ts
  favicon.ico
  index.html
  main.ts
  styles.scss
```

## Known Issues
- Refreshing a page will throw 404. This is a known issue of GitHub Pages, since it doesn't support front-end routes properly, unlike Netlify for example. To access the page, it's necessary to use the base URL: [https://tomasbencko.github.io/angular-quiz-maker/](https://tomasbencko.github.io/angular-quiz-maker/).
