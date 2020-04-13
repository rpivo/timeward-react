## The First Ten Sprints: React, TypeScript, & AWS
### Sunday, April 12, 2020

I originally started this project to become more familiar with three things: React, TypeScript, and AWS. 

I've only recently been able to connect the project to AWS, but React and TypeScript have both been baked in since the beginning. I really feel like I've learned a lot about both TypeScript and React, and I hope to continue becoming more familiar with these tools.

Recently, I've connected the project to an Amazon Cognito user pool, which has been pretty exciting, but also very challenging. The overall AWS landscape is massive, and each individual service has its own vast API. There's a lot of ground to cover there. 

In the past week alone, I've been playing with the Cognito implementation and getting it to trigger Lambda functions and taking a look at the results of these triggers inside Cloudwatch. I've started exploring JSON Web Tokens and have been trying to figure out exactly how they work and how they should be verified. This is an ongoing process.

In regards to React, I started this project with a basic understanding of the API, having worked with class components, props, and state. The initial implementations of a lot of the project's core components were class components.

Over time, I began to shift the whole project to use hooks. I also began incorporating more advanced React techniques and features, like using forwardRefs, memos, compound components, and managing global state with reducers.

I had never used TypeScript prior to this project, and probably the majority of the hangups I've had throughout the project have been TypeScript issues. Some weeks felt like pulling teeth. It can be incredibly frustrating when you have a pesky static typing or linting issue that just won't go away no matter what you try. I also chose to make my TS config very strict, adding fuel to the fire.

And, even though I still have typing issues here and there, I can say that I absolutely love working with TypeScript. In working with JavaScript codebases, I often find myself thinking that so many issues would not be occurring if the codebase were written in TypeScript. Not only that, TypeScript has made learning Kotlin seemingly easier as the static typing syntax in Kotlin is not that much different from TypeScript.

<hr />

Although I feel like I've covered a lot of ground and my mental model on the above things have improved, there's still so much ground to cover before this project reaches a 1.0.

I've broken some ground on the auth flow, but there is still so much to do. There's little to know UI feedback given to the user during authentication. I also really need to beef up my understanding of JWT tokens and how they work. On top of that, I need to become more familiar with the Amazon Cognito Identity SDK and how it uses JWT tokens.

On the AWS side, I think achieving 1.0 will involve ironing out all of the auth flow details mentioned above as well as routing up user authentication to DynamoDB data from the user's previous sessions.

The Login page actually looks pretty good as of right now, although there still will need to be some feedback for certain auth flow integrations.

The Dashboard still needs a lot of work. A lot of the basic functionality for the Timer is in place, which is awesome, and updating global state based on this Timer has already been implemented and can be iterated on fairly quickly.

The Chart and Graph components on the Dashboard need a lot of TLC at the moment. They're useless as of right now. It would be nice to get either or both of them to a very minimal working condition by the time most everything else is ready for 1.0.

Another thing about the Dashboard is that it hasn't had any interaction with a DynamoDB table as of yet, so that will be a big to-do in terms of populating previous user data into the current session. There will be a lot of work to do on that alone.

Another huge area that has gone completely untouched so far is mobile. This will have to be worked on extensively to get to 1.0. Eventually, the goal is to write a native app in Kotlin, but I think that should come after a web 1.0.

- Dashboard Graph / Chart UI implementation
- Auth flow improvements
- DynamoDB routing
- mobile

So, still a lot to do. I doubt I'll get to 1.0 in the next ten sprints, but I'm excited to see what comes of it anyway.

<hr />

As I've worked on this project for the past five months, here's a short list of some ideas that have cropped up that I'm excited to start exploring.

#### The AWS Backend Stack
I've sort of plotted out how this should go, but this is still incredibly new and has been changing from week to week for the past month. Currently, I'm thinking I'll be (aside from Cognito) Lambda for overall backend functionality, Cloudwatch for monitoring, AppSync with GraphQL to communicate between the frontend and backend, and DynamoDB to persist user timing data.

#### Native Mobile
I've been learning Kotlin and would really like to start building a native Android Timeward app. This is probably incredibly ambitious at this point, but I like this idea nonetheless.

<hr />

There's still so much work to do on this project. It's kind of daunting, especially given how challenging the past five months have been. It seems like every other week I get hung up on a new issue, but somehow I manage to get past it. So, yes, there is still much to do, but if the next five months are like the last, then I'll probably learn a lot. Definitely looking forward to that.