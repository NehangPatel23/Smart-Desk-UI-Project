# Smart-Desk-UI-Project
This repository contains my implementation of the Smart Desk UI. 

The Smart Desk UI is a React-based interface that provides control and information display for a virtual tablet-like device. It offers features such as controlling speakers, screen, Do Not Disturb mode, HDMI dock, and more. Additionally, it includes a Pomodoro timer, weather information, and customizable settings.


<br>


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Prototype Sketches](#prototype-sketches)
- [Design Challenges & Interviews](#design-challenges--interviews)
    - [Assumptions about the Smart Desk](#assumptions-about-the-smart-desk)
    - [Interview Questions](#interview-questions)
    - [Design Requirements](#design-requirements)


<br>


## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.


<br>


### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system. If you don't have them installed, you can download and install Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download).


<br>


### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/NehangPatel23/Smart-Desk-UI-Project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Smart-Desk-UI-Project
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The Smart Desk UI web application should now be running locally at <`http://localhost:5173`>.


<br>


## Features

The Smart Desk UI web application provides the following features:

- Control buttons for various functions, including speakers, screen, Do Not Disturb, HDMI dock, and more.
- A customizable Pomodoro timer with the ability to set a custom time.
- Ambient lighting control.
- Display of current weather information.
- Real-time clock display.
- Adjustable table height with a range slider.
- Responsive design for mobile and desktop devices.


<br>


## Usage

1. Launch the application by following the [installation steps](#installation).

2. Use the control buttons to interact with different features. For example, you can toggle the "DO NOT DISTURB" mode or start a Pomodoro timer.

3. Customize the settings, such as the custom Pomodoro time or ambient lighting.

4. Explore the weather information and current time display.


<br>


## Demo Video

The demo video will be linked here.


<br>


## Prototype Sketches

The prototype sketches can be found on my [Portfolio Site](https://sites.google.com/view/nehang-patel-portfolio/classes/user-interfaces-i/project-1). I had a 37-page document for the sketches, which I was not able to embed here, so I included a link to my portfolio site here. However, below are the sketches of how I envisioned my UI too look like:

<img width="651" alt="Screenshot 2023-10-12 at 8 43 51 PM" src="https://github.com/NehangPatel23/Smart-Desk-UI-Project/assets/90214774/717bf8cf-3e16-40e7-95d8-cf0b69441a33">

<img width="645" alt="Screenshot 2023-10-12 at 8 50 27 PM" src="https://github.com/NehangPatel23/Smart-Desk-UI-Project/assets/90214774/9bc5973f-6cce-457d-8d6a-5605238c36f1">

<img width="645" alt="Screenshot 2023-10-12 at 8 50 39 PM" src="https://github.com/NehangPatel23/Smart-Desk-UI-Project/assets/90214774/a3d2df52-e7b5-4505-954f-4662fe5c96dc">

<br>
</br>

**Feedback Recieved on Prototype UI Sketches:**
According to the feedback on the skeleton sketch, overall, the design of the desk as a whole looks good, and the placement of the elements looks fine. The layout and organization of elements are clear and intuitive. Users should have no trouble navigating the interface. The accessibility looks good, as the buttons are large enough and the text is legible. Work is still needed to implement feedback mechanisms for the buttons, though. I could also maybe incorporate some kind of smart device connectivity, user onboarding (for first-time users), and user feedback (for errors), etc. in some way, but I think that is something for a later part of the project.


<br>


## Design Challenges & Interviews

### **Assumptions about the Smart Desk:**

 - The smart desk can adjust its height automatically.

 - It has integrated wireless charging capabilities for devices like smartphones.

 - It can connect seamlessly with the user's device using a NFC-like technology.

 - It can provide information about air quality and temperature in the workspace.

 - The smart desk can connect to a user's calendar and provide reminders.

 - The smart desk has productivity features such as Pomodaro Timers, Work-Break timers, etc. to enhance the quality of the user's work.

 - The smart desk has adjustable ambient lighting features to improve the workspace.

 - It can sync with a user's design software and tools.

 - The desk has a calendar integration to remind the user of important events.
   


<br>



### **Interview Questions:**

In order to better understand the diverse needs and preferences of potential users, I conducted interviews with three individuals, each with their own unique use cases for a desk. These interviews shed light on how people utilize their desks, their daily routines, and their expectations for a "smart desk" – a desk that can adapt to and enhance their work environment. The responses provide valuable insights for designing desks that can cater to a wide range of professional and personal activities, emphasizing the importance of functionality, organization, and adaptability. Below, I present a summarized overview of the insights gathered from these interviews:

**Question 1: What do you use a desk for?**

- All three interviewees use their desks for work-related tasks. Interviewee 1 uses it for coding, meetings, and recreation. Interviewee 2 employs their desk for graphic design work, while Interviewee 3 uses it for studying, assignments, and virtual meetings.

**Question 2: How long are you typically at your desk?**

- Interviewee 1 spends 8 to 10 hours at the desk during an average workday. Interviewee 2 typically spends 6 to 8 hours daily, and Interviewee 3 is at the desk for about 6 to 8 hours on weekdays, with occasional longer hours.

**Question 3: Can you describe your daily routine and work habits at your desk?**

- Interviewee 1's routine involves coding, alternating between sitting and standing, and keeping devices for meetings. Interviewee 2 emphasizes the importance of lighting in graphic design work and surrounds themselves with inspirational quotes. Interviewee 3 primarily uses the desk for studying, assignments, and online meetings.

**Question 4: What is the ideal size/shape would you want for your desk?**

- Interviewee 1 prefers a spacious desk that isn't overwhelming, with no specific shape preference. Interviewee 2 prefers a large, rectangular desk with adjustable height options. Interviewee 3 prefers a compact desk with more space for study materials.

**Question 5: What do you like or dislike about your desk?**

- Interviewee 1 appreciates the functionality but wishes for features to enhance a healthier work environment and more height adjustment options. Interviewee 2 likes the space but wishes for features that enhance creativity and motivation. Interviewee 3 values functionality but desires better organization features.

**Question 6: What kind of productivity applications do you find yourself using on a daily basis?**

- Interviewee 1 uses code editors, project management tools, and video conferencing apps. Interviewee 2 uses Adobe Creative Suite applications and project management tools. Interviewee 3 relies on video conferencing apps and productivity tools for scheduling.

**Question 7: Do you store things in or on your desk?**

- Interviewee 1 stores stationery and cables in a desk drawer, with devices on the desk's surface. Interviewee 2 stores art supplies and reference materials in desk drawers. Interviewee 3 keeps study materials and personal items in desk drawers.

**Question 8: How important is having a clutter-free workspace to you?**

- All interviewees place importance on having a clutter-free workspace, as clutter can be distracting and impact their productivity and focus.

**Question 9: What do you think of when you hear "smart desk"?**

- All three interviewees envision a "smart desk" as one that adapts to their needs, enhances their work environment, and potentially offers features like adjustable height, customizable lighting, software integration, and motivational content.

**Question 10: What would you find reasonable to spend on a smart desk?**

- Interviewee 1 is willing to invest around $500 to $900 in a smart desk. Interviewee 2 is willing to spend around $700 to $1000, and Interviewee 3 considers a budget of around $500 to $700 for a smart desk, given their financial constraints.


<br>


### **Design Requirements:**

 - The desk should have an adjustable height.
   
 - It should integrate with the user's calendar and display upcoming meetings. 

 - It should also have certain productivity features that can help the user be focused and take breaks, as and when needed.  

 - The UI should have a wireless charging indicator and controls.

 - The user interface should offer lighting customization options.

 - A feedback system should be available for users to report and address any distractions or challenges in their workspace.
