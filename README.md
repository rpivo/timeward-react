# timeward

See the [changelog](docs/changelog.md) for the latest updates on this project.

### day manager & time tracker.

Timeward is a productivity tool designed to help you manage your time better, and to help make the progress in that time more meaningful.

Timeward helps you build positive habits with your schedule, whether it be tracking the progress of life-long goals, or just helping you prioritize personal time. It's made to help you with both the greatest aspirations as well as finding the smallest stress-free moments.

Keep track of your time with your computer, phone, watch, and your smart devices. Keep an incredibly tight schedule with whichever device feels right, or let Timeward make intelligent decisions based on your previous schedules.

"Timeward" is a portmanteau of the words "time" and "forward". The most valuable resource you are given is time. It perpetually moves forward and stops for nothing. In trying to wrangle in the time that you have, you sometimes get bogged down by forgotten details and the minutiae of life. You get thrown off by events you didn't foresee. 

Timeward is designed to be a failsafe for these moments.

### Toolchain

Timeward is built with:
- **React** for the frontend.
- **TypeScript** for added language strictness
- **Amazon Web Services**, including:
    - **CloudWatch** for pipeline monitoring and metrics.
    - **CodeBuild**, **CodePipeline**, & **CodeDeploy** for CI/CD.
    - **CodeCommit** for source code management.
    - **Cognito** to manage auth flow.
    - **Route 53** for DNS & record set management.
    - **S3** for static web hosting & build artifact storage.
- **Jest** and **Enzyme** for testing.
- **Webpack** for bundling.
- **ESLint** for linting.
- **styled-components** for styles.
- **Docz** for documentation.