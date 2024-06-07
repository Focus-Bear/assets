# v1.8.284 (June 3 - 2024)
## New Features
- New modes added: Simple Mode / Geek Mode, to reduce overwhelm. 
    - Geek mode: Shows all features including Focus Modes and Full Pomodoro.
    - Simple Mode: Will only show basic features and a Simplified Pomodoro. Focus Modes will be hidden.
    - A selector button is added in the Settings screen in Preferences to switch between modes. If in Simple mode, the selector button is also shown on the menu. An indicator icon is also placed in the Edit Habits screen in Preferences to show which mode is currently active. 
- To Do Player: When starting a new focus mode, a “To Do Player” window will open to allow you to create or select a task to work on during the session. The “To Do Player” can also be accessed from the menu during an active focus session.
- If switching to Office Mode, the menu icon changes to a grayscale image.
- Added an option to allow all URLs in a website in the AI blocking popup window.
- Added a Strictness setting to require an intention when you postpone a habit activity. This intention will be used the next time you start a Pomodoro or Focus Mode.
- Added a Pomodoro setting for a Work to Break ratio with a default of 5:1, so everytime you start a Pomodoro, your break duration is automatically set to 1/5th of your work duration.
- The focus mode end popup window will ask you to rate how focused you were during the session instead of asking if you had any distractions.
- Support for blocking on Opera and Vivaldi browsers

## Bug Fixes/Improvements
- Fixed blocking overlay issues where the blurring does not fully cover the screen when the app or browser is being displayed on a second monitor.
- If selecting “Student” as your occupation during the onboarding process, the succeeding screens will use “Study” instead of “Work” where appropriate.
- Simplified the menu items
- Addressed usability issues with “Click & Drag to create a task” feature by requiring to press the Control key before clicking the menu icon to activate the feature.
- Remember the preference for skipping microbreaks in the Pomodoro start screen.
- Other focus modes are hidden from the menu when a focus mode is actively running.
- More time allocated to wait for AI response when evaluating if a website/app is safe to use during a focus mode with AI blocking enabled.
- If you hide the popup window that asks if you want to start a new focus session, it will popup again after 1 minute just in case you forgot to select an option.
- Fixed an issue where AI blocking is bypassed when an app is maximised.
- Ability to skip the “Get Focused” screen when starting your Morning or Evening routine.
- If the Start Break screen is ignored and no other computer activity is detected for the entire duration of your break activity, Focus Bear will assume that you are already taking a break and will cancel the break screen.
- Fix for the Pomodoro break to allow it run the full duration even if the break activity is shorter. A countdown popup window will appear to show the remaining pomodoro break time.
- Alphabetical sorting of focus modes on the menu.
- Preloading of To Do player to speed up loading when starting a pomodoro

# v1.6.265 (Mar 28 - 2024)
## New Features
- If you start using your Mac early in the morning (4 hours before your morning schedule), you now have the option to start your morning routine early.  If you have not done your evening routine yet at this time, then you are provided the option to start either your evening routine or your morning routine.
- A menu tooltip will show whether the app or URL you are accessing is allowed or not.
- You can set individual cut-off times for each "Must do" activity in your evening routine.
- You can create a new task by clicking and dragging the Menu icon. The task's due date is defined by how far you drag the line.
- You can embed a tutorial course as part of a habit activity.
- Option to completely skip the entire break if you try to skip an activity.
- Show a popup with the number of tabs open for each browser when you exceed the tab limit of the Browser Tab Limiter feature.

## Bug Fixes/Improvements
- Optimized for faster menu response.
- Fix for when a paused activity restarts if it crosses over to the next day.
- To get better feedback when quitting or uninstalling the app, the options for quit/uninstall reasons have been modified to be more descriptive.
- The Start Pomodoro screen is shown if you choose to start another focus block at the end of a focus session.
- UI fixes for smaller screens
- You can edit the URL in the list of sites/apps that you allowed during a focus mode.
- Skip Microbreaks option is set by default when starting a focus mode.

# v1.3.257 (Mar 4 - 2024)
## New Features
- When a site has been allowed by AI blocking, you can check the reason why it was allowed by hovering over the Focus Bear icon in the top menu bar.

## Improvements
- After the break from a focus mode has ended, the app will show the Pomodoro Start screen so that you can start another focus mode.
- Made some UI improvements for 13-inch MacBook screens.
- Updated the Discord invite link in the Community Help tab.
- General bug fixes and backend improvements.

# v1.3.253 (Feb 22 - 2024)
## New Features
- The app calculates your Focus Alignment Score based on how relevant a site is to your focus intention and shows you a warning if the score goes below a certain value during a focus session.
- Added the ability for you to choose which habits to do during a routine in any order you like.

## Improvements
- Hide the dock icon by default if the Strictness Level is set to "Strict".
- Show the "Saved for Later" list if blocking is disabled during breaks.
- Show quotes about taking breaks in the start break popup.

## Bug Fixes
- Fix to make Focus Bear an always-allowed app so it doesn't block itself accidentally if added in the blocked apps list.
- General stability improvements

# v1.1.245 (Feb 6 - 2024)
## New Features
- Coming Soon: Community tab in the help section for discussions with other Focus Bear users.
- Added an alternative way (but still hard enough to deter impulsivity) to bypass password protection when unlocking the computer after finishing your evening routine. 
- Blocking in firefox now supported

## Bug Fixes/Improvements
- Removed the countdown timer if you select the "Can’t do it" option when skipping a habit.
- Display a warning message when you navigate away from the Edit Habits tab with unsaved changes.
- Fixed the issue for having denied permissions setting for all browsers when reinstalling the app.
- Password protected the 'Customize Habits' button in the morning/evening routine start screen.
- Start habits seamlessly after your routine begins.
- Fixed the issue with Late No More app disrupting your completed routine activities.
- Added a step to accept the privacy policy during installation.
- Added tool tips when hovering over the info "i" icons in the settings.
- Added "New" badges to identify newly added features in the settings.
- Added icons to menu items to reduce cognitive load for easier navigation.
- Optimized the UI in the Friction settings.
- Simplified the Pomodoro start screen UI.
- Show a slider to adjust the strictness level after finishing the onboarding process.
- Added a progress indicator in the onboarding process.
- Added the option to select 25 minutes for the delay duration of habits and activities.
- Remembers the last focus mode duration when starting a new focus mode.
- Show a confirmation if you still want to do your habits if you have not yet done them after more than 4 hours have already elapsed since your scheduled routine start time.
- If you have enabled password protection, we’ve introduced a different friction mechanism for unlocking the computer, in - addition to the password.
- Removed the 15-second delay countdown when choosing to skip habits.
- Added the option to extend postpone duration for habits after the postponement countdown is finished.
- Password protection included for starting the ‘Relax - block nothing’ focus mode.
- Show the current Friction level setting in the Focus mode start screen.
- Added ability to extend a focus mode session in the 2-minute warning popup that appears when a focus session is about to end.
- More websites added to the allowed list in the default Meetings focus mode for better call detection.
- Added the option to pin the Focus session completion window so it stays on top of other windows on your desktop.
- Ability to report issues directly from the Report Problem screen.
- Ability to send logs directly from the app without having to use email.
- Various minor bug fixes and optimizations.

# v229 (Dec 23 - 2023)
## Bug Fixes / Improvements
- Password enabled check added for showing evening routine if app is deactivated
- Refined onboarding experience
- Additional event logs
- Time Tracker: Ability to export logs from the app
- Improvements to the preference settings
- Improvements to UI behaviors
- Various code fixes

# v228 (Dec 21 - 2023)
## Bug Fixes / Improvements
- Let user start break immediately instead of waiting 30 seconds
- Show total time spent on super distracting websites in set intention screen
- Automatically start habits at cutoff time instead of waiting for user input
- Prompt to install Late No More implemented, setting adjusted.

# v227 (Dec 16 - 2023)
## Bug Fixes / Improvements
- List item text color fixed
- After Password entered - keep unlocked for 2 minutes
- TimeTracker: Fix for UI not staying in the same place when performing certain actions

# v226 (Dec 15 - 2023)
## Bug Fixes / Improvements
- Allow choosing a different habit to do during routines
- Update work for time tracker

# v225 (Dec 13 - 2023)
## Bug Fixes / Improvements
- Should require a password to unlock Focus Bear when Late No More appointment starts
- Fix for Pomodoro window showing every 10 minutes, implemented controls in the automatic Super Pomodoro setting
- Pause blocking of URLs during breaks
- Time Tracker: Allow creating a new project while logging a call/idle time
- Alert added regarding URL blocking during breaks
- Push back standard break if there has been a pomodoro break

# v224 (Dec 7 - 2023)
## Bug Fixes / Improvements
- Settings change pusher notification integrated. App will restart automatically if the settings are changed on another device.
- Changes to onboarding in "How did your hear about Focus Bear" section

# v223 (Dec 6 - 2023)
## Bug Fixes / Improvements
- Integrated pusher notifications for Completed-Activity / Skipped Activity in morning / evening routine.
- Handling of cases for Activity ongoing / postponed / etc.

# v222 (Dec 5 - 2023)
## Bug Fixes / Improvements
- Integrated Pusher notifications for Focus Mode start and end events. So if the user is logged in on 2 devices with the same account (one being mac), if the user starts a focus mode in another device like mobile or windows app, mac app will get a notification of Focus mode start/end and will showup accordingly.

# v221 (Dec 1 - 2023)
## Bug Fixes / Improvements
- Removed blur from break postpone (second time when 15 sec counter is on)
## Screen Time Updates
- Allow creating a new project while logging a call/idle time
- Remove new project heading 
- Allow user to split time from idle time / popup 
- Fixed showing remainder time 
- Added option to remove a time entry from Chronological view.

# v220 (Nov 27 - 2023)
## Bug Fixes / Improvements
- Fixed issue to pass duration to the Task window on Focus Mode End Screen.
- minor text change for Mac app Focus Mode start screen
- Screen Time: Show title first and then the URL for all the URLs

# v219 (Nov 23 - 2023)
## New Feature
- Focus Bear Time Tracker..new users will see an intro offer to enable Focus Bear Time Tracker on 3rd day of installation after finishing Morning Routine. Existing users will see this offer right after updating to new build and finishing the Morning Routine.
- Users can also enable Focus Bear Time Tracker from the Advanced section of Focus Bear Preferences.

# v218 (Nov 14 - 2023)
## Bug Fixes / Improvements
- Pass habit data to Time Tracker, Screen Time/Time Tracker should always be allowed
- What's next screen - press enter twice to continue, focus session achievements shouldn't appear as url encoded on end of day screen

# v217 (Nov 3 - 2023)
## Bug Fixes / Improvements
- Fixed issue for activities not recognizing allowed URL keywords

# v216 (Oct 21 - 2023)
## Bug Fixes / Improvements
- Rename Deactivate to Pause Blocking
- Fixed the issue with the focus block end screen disappearing if too much text is entered into the "What did you achieve?" text area.

## New Features
- Completed spanish translation of webviews
- Added access the To-Do list from the Tools menu
- Added ability to start a Focus mode from the Brain Dump window
- Total focus time is shown in the focus mode end screen
- Used a new combo box component for the What's Next screen

# v215 (Oct 7 - 2023)
## Bug Fixes / Improvements
- At the end of focus mode screen, a popup will show the selected Todo Tasks during the start focus mode screen and ask you to mark which ones you were able to finish, then put it in the "What did you achieve?" text area
- Show selected tasks in the Brain Dump during a focus mode
- Added a note about autosaving for the close button in the Brain dump window
- Fixed an issue with the Postpone break button not working

# v214 (Sep 20 - 2023)
## Bug Fixes / Improvements
- Task list is also shown in the End of Focus Mode window.
- Fix for showing the wrong window for task selection
- Fix for password restriction for postponing the evening routine after cut-off time.

# v213 (Sep 14 - 2023)
## Bug Fixes / Improvements
- Show the To-Do Task list in the Focus Mode and Pomodoro start windows

# v211 (Sep 11 - 2023)
## Bug Fixes / Improvements
- Fixed bug in calculation of habit completion time
- Improvements to the To-Do List feature

## New Features
- Added an impact measurement feature to record sleep, energy, and mood.
- Added a CSat/NPS survey rating

# v210 (Sep 7- 2023)
## Bug Fixes / Improvements
- Added a close button in the Select Tasks window when starting a focus mode
- Logs added for identifying sound files

# v209 (Sep 6 - 2023)
## Bug Fixes / Improvements
- Improvements to LateNoMore integration to run activities that are not included in the habits and to start focus modes
- Fix for YouTube videos not loading during activities

## New Features
- Show a post-install guide after completing installation and onboarding

# v208 (Sep 2 - 2023)
## Bug Fixes / Improvements
- Improvements to the syncing of activities between desktop and mobile app to allow the mobile app to complete activities in any order  
- Improvements to call detection
- Fix for directing keyboard focus on the text area when taking notes during an activity
- Added support to not show completed activities that were done randomly on mobile app for the morning and evening routines.

# v207 (Aug 25 - 2023)
## Bug Fixes / Improvements
- Show a count-up timer instead of countdown during the meeting focus mode.
- Fixed allowing of Progressive Web Apps (PWA) during habit activities.
- Omitted event logging for test accounts
- Added the feedback message in the API header when uploading logs to the server
- Break activity videos are paused when they occur during a call

# v206 (Aug 21 - 2023)
## Bug Fixes / Improvements
- Added icons to the new Settings UI
- Applied 5 second limit to the safe URL API before showing a popup
- Fixed issue of blurring of blocked apps/sites not covering entire area
- Show the login window after deleting an account

# v205 (Aug 19 - 2023)
## Bug Fixes / Improvements
- Updates to the Settings UI layout
- Handling of HTTP400 state for API calls when offline

# v203 (Aug 14 - 2023)
## Bug Fixes / Improvements
- Fixed issue for focus mode ending countdown timer not closing when changing to a different focus mode.
- Handling of HTTP500 state for API calls. 
- Updates to the Settings UI layout

## New Features
- Added a To Do List feature when starting a focus mode.
- Accessibility fonts applied to all webviews

# v202 (Aug 9 - 2023)
## Bug Fixes / Improvements
- Added support to list apps from Utilities folder, System apps
- Added support for Dark mode in Settings and Stats page (in Preferences)

# v201 (Aug 8 - 2023)
## New Features
- Remember last focus mode duration

## Bug Fixes / Improvements
- Updated onboarding cards
- Bug Fixes and improvements

# v200 (Aug 1 - 2023)
## New Features
- Super distracting Apps. You can now add super distracting apps to be blocked.

## Bug Fixes / Improvements
- Other minor improvements

# v199 (Jul 28 - 2023)
## Bug Fixes / Improvements
- Fixed keyboard focus issues
- Fixed an issue when starting another focus mode within an allowed-focus-mode activity.
- Fixed issue with controls being hidden in Set Intention box when the 5 sec. timer is shown.

# v198 (Jul 27 - 2023)
## New Features
- Ability to start Pomodoro via a shortcut, configurable in settings.

## Bug Fixes / Improvements
- Updates to address flickering issues for Set Intention box
- Improvements to Set Intention box

# v197 (Jul 26 - 2023)
## Bug Fixes / Improvements
- Enhancements to Set Intention functionality
- Added logs for audio events
- Enhancements to Log Qty functionality

# v196 (Jul 25 - 2023)
## Bug Fixes / Improvements
- fixed focus mode URL blocking behaviour
- fixes for LateNoMore and FocusBear interrupting system restart.
- show current time format based on your locale settings
- code enhancements to address Graph issues and code conflicts

# v195 (Jul 24 - 2023)
## Bug Fixes / Improvements
- Enhanced the Set intention popup for Super Distracting URLs to allow you to input a time for when you want to visit the site later.
- Enhanced the Log Quantity to accept input values using sliders or textbox

# v193 & v194 (Jul 22 - 2023)
## Bug Fixes / Improvements
- Enhanced the Log Quantity sliders to take input via text boxes
- Fixes to the cuddly bear popup if AI endpoint says a URL or app should be blocked
- Enhancements to the Set Intention window when opening super distracting sites

# v192 (Jul 21 - 2023)
## New Features
- Display an intention window if you want to continue opening a site identified as Super Distracting.

# v191 (July 20 - 2023)
## New Features
- Tutorial to show how to add Focus Block tags appears at the end of focus block session

## Bug Fixes / Improvements
- Other minor enhancements and bug fixes

# v190 (July 19 - 2023)
## New Features
- Focus Block tags are now included in the exported CSV file

## Bug Fixes / Improvements
- Various bug fixes
- Improvements to relax mode activity
- Improvements for using focus modes while an activity is postponed
- Loading screen added while waiting for activity props

# v189 (July 18 - 2023)
## New Features
- Ability to add tags to completed focus block sessions

# v188 (July 15 - 2023)
## New Features
- Added support for Relax focus mode and relax activity in evening routine

# v187 (July 15 - 2023)
## Bug Fixes / Improvements
- Added support for ARC browser

# v186 (July 11 - 2023)
## Bug Fixes / Improvements
- Improvements in existing functionality

# v185 (July 7 - 2023)
## New Features
- Added Focus Bear menu tour to guide new users

## Bug Fixes / Improvements
- Minor improvements to various sections of the app

# v184 (July 6 - 2023)
## Bug Fixes / Improvements
- Improvements to blocked URLS screen during onboarding.
- Improvement to Signup screen for "Generate Password" option
- Added support for Poppins font.
- Fix to not reload habits whenever a screensaver takes over while there is still an undismissed meeting notification from LateNoMore  

# v183 (July 1 - 2023)
## Bug Fixes / Improvements
- User settings now loaded with the new pattern in Edit Habits screen.
- Modified the Brain dump screen to close when the save button is clicked.
- Added an arrow in the screenshot of the AI screen in onboarding to help make it more understandable.
- Added a highlight to the generated password text in the signup screen.
- Made the text size in the Activity instructions adjust dynamically so it maximizes the text box area for improved visibility.
- Improvements to the logging to capture more relevant data.

# v182 (July 1 - 2023)
## Bug Fixes / Improvements
- Fix to allow the focus mode to continue uninterrupted, even if a microbreak starts
- Added a save button to the brain dump screen to make it more intuitive and prevent any confusion.
- Added visual enhancement to the menu by highlighting the active focus mode. This makes it easier to identify the currently active focus mode at a glance.

# v181 (July 1 - 2023)
## Bug Fixes / Improvements
- Improved keyboard navigation in activities that don't use timers, making it easier to navigate and interact with them via keyboard.
- Fixed the alignment of text in the deactivate screen, ensuring that it is centered properly.
- Resolved an issue where the name of the random choice activity was not displayed on the start button.
- Made user interface enhancements to the Generate password screen in the Sign Up window, improving the overall experience of creating a password.
- Added helpful tooltips to the checkbox options on the Goals screen during the onboarding process, providing additional information and guidance.
- Made improvements to the strictness selector feature during onboarding.

# v180 (June 27 - 2023)
## Bug Fixes / Improvements
- Fixed an issue where the Cuddly Bear Allow App popup windows is hidden behind the blocked app and was unclickable.
- Removed a log event that is no longer needed, improving the application's performance and optimizing resource usage.
- Fixed an issue where the Focus time remaining was showing negative time values
- Added scroll view in General tab under Preferences > Settings, which allows you to easily navigate and access all the settings, even if they exceed the available window space.
- Made changes to the onboarding screen for a more user-friendly experience. 

# v179 (June 26 - 2023)
## New Features
- Introduced a new option in the Late No More settings. Users can now enable the automatic launch at system startup feature so the application starts up automatically when you startup your computer, saving you time and effort, and ensuring that you don't miss any meeting reminders.

## Bug Fixes / Improvements
- Fixed an issue where the focus mode activity would restart when a screensaver appeared while waiting for input on the focus block end screen. 
- Made screen adjustments for better readability of texts using the Dyslexia friendly fonts. This will enhance the reading experience and improve accessibility for users with dyslexia.
- Added a blank default option in the "Reason for deactivating" dropdown menu, which encourages users to consciously choose a reason when deactivating the app.
- Changed the title on the break activity habit pack select screen for better clarity. This makes it easier to identify and select the desired habit pack during break activities.


# v178 (June 24 - 2023)
## New Features
- If your evening routine begins while you are in a focus mode, we have added a feature that will display the Focus mode end screen to help you smoothly transition from your focus mode to your evening routine.
- In Cuddly Bear mode, we have introduced a progress bar in the Gentle Block window. This bar indicates how much you have taught Focus Bear about your focus preferences. Each time you block or allow a URL, the progress bar increases by 1. Once you reach 50 decisions, Focus Bear will have a good understanding of your focus needs.

# v177 (June 23 - 2023)
## Bug Fixes / Improvements
- We have made improvements to make the app more compatible with Dyslexic-friendly fonts. Additionally, we have implemented various general fixes to enhance overall performance.

# v176 (June 22 - 2023)
## New Features
- You can now upload logs to our server if you encounter any issues with the app. This feature requires your permission to proceed.
## Bug Fixes / Improvements
- We have included support for two new fonts: Intel One and Open Dyslexic.

# v175 (June 20 - 2023)
## Bug Fixes / Improvements
- You can now postpone breaks for more than 5 minutes

# v174 (June 20 - 2023)
## New Features
- If you postpone your habits, the Start Focus Mode popup will appear to guide you in using your time wisely.
- You can synchronize your activities with the allowed focus mode, and they will be marked as completed focus modes.
## Bug Fixes / Improvements
- We have fixed the issue where the size of the cuddly bear popup would change unexpectedly.
- You can now choose to require a password when postponing an activity after clicking "Deactivate" from the menu.

# v173 (June 17 - 2023)
## New Features
- Now supports installation links for mobile apps.
- You can now schedule breaks during your evening routine's focus mode.
- The system can detect any changes you make to your habits and updates them accordingly. This takes effect after the system wakes up or when you resume a postponed activity.

# v172 (June 15 - 2023)
## New Features
- Added a new feature that stops the blocking of URLs when the app is deactivated.
## Bug Fixes / Improvements
- The color of button texts has been changed from orange to black for better readability.
- Certain accessibility issues have been resolved.
- Text changes have been made for better understanding - "m" is now represented as "minutes".
- You can now resize the Preferences Window for all tabs.
- Text color on all screens has been changed from grey to black.

# v171 (June 14 - 2023)
## New Features
- You now have the ability to change fonts with the added option for dyslexia-friendly fonts.

# v170 (June 13 - 2023)
## New Features
- Users now have the option to skip break activities if they wish.

# v169 (June 12 - 2023)
## Bug Fixes / Improvements
- Improved accessibility by fixing issues related to contrast colors on various screens for both dark and light mode.
- Made minor UI fixes for a smoother experience.

# v168 (June 5 - 2023)
## New Features
- New setting to control reloading after a forced quit.
## Bug Fixes / Improvements
- Added handling for LateNoMore triggers.

# v167 (June 01 - 2023)
## Bug Fixes / Improvements
- Enhanced the search feature to highlight the selected option from the search results.
- Added an overlay that doesn't take focus initially and gradually becomes clearer, when its time for Full Screen Breaks.

# v166 (May 26 - 2023)
## Bug Fixes / Improvements
- Minor enhancements

# v165 (May 26 - 2023)
## New Features
- Added support to get breaks while postponed in evening routine.
## Bug Fixes / Improvements
- Text changes on evening routine's finish screen.

# v164 (May 26 - 2023)
## Bug Fixes / Improvements
- Removed capture thoughts screen before breaks while in call. Changed texts for some related screens.
- Fixed: Chrome permission requested before the user gets to Permission page.
- Tech changes for Blocked URLs screen while onboarding.
- Enhanced AI blocking screen during setup focus modes AI question.

# v163 (May 25 - 2023)
## New Features
- Dark mode setting made searchable.
## Bug Fixes / Improvements
- Quit window modified not to have countdown timers after submitting feedback
- Support for running non full screen breaks (even if the user is normally full screen) added even if the user is on a call. A setting is added for this.

# v162 (May 24 - 2023)
## New Features
- Added a setting (under General) "Dark Mode" with a dropdown "Copy system preferences", "Always Dark Mode", "Never Dark Mode"
- Setting for Verbal announcement of next activity/finished activity added.
## Bug Fixes / Improvements
- Fixed minor bugs

# v161 (May 23 - 2023)
## New Features
- Verbal Announcement added on finishing activity.
## Bug Fixes / Improvements
- Adjustments for non Full Screen Breaks, bigger Size windows, etc.
- Advanced blocked URLs respected during allowed focus mode activity.
- Timer removed when Daily motivational message is shown before routines.
- Enhancements to log quantity screen.
- Button Title changed to "Postpone" in non full screen mode.

# v160 (May 22 - 2023)
## New Features
- Support for non full-screen breaks added
## Bug Fixes / Improvements
- Added support to choose their friction level during onboarding

# v159 (May 18 - 2023)
## New Features
- Show daily random inspiration phrases at the start of morning and evening routines
## Bug Fixes / Improvements
- Fixes to the blur feature when website blocking popup appears
- Enhancements to the log quantity value sliders feature
- Enhancements to the activity checklist feature
- Tweaks to the onboarding UI
- Increased the size of the Help tab in preferences

# v158 (May 16 - 2023)
## New Features
- Let user customize habits from the morning/evening routine start screen
## Bug Fixes / Improvements
- Enhancements to the log quantity value sliders feature
- Tab limiter fixed for multiple windows with specific browsers

# v157 (May 15 - 2023)
## New Features
- Added a checklist feature to an activity
- Added a browser tab limiter feature
## Bug Fixes / Improvements
- Implemented value sliders for the activity log quantity

# v156 (May 9 - 2023)
## New Features
- Added volume control for Focus Music
- Allow saving of Focus Mode intention as a template
## Bug Fixes / Improvements
- Adjusted the Focus Mode timer to countdown in real time

# v155 (May 9 - 2023)
## New Features
- Added chat support inside the Help tab in preferences
- Added search feature for settings
## Bug Fixes / Improvements
- Updates to the Change Video feature during an activity
- Updates to the Focus Mode menu bar timer
- Implemented the API for End-of-Day activity summary

# v153 (May 2 - 2023)
## New Features
- Allow option to show focus mode time remaining in menu bar
- Added Chat With Focus Bear tab inside Help section
- Allow changing the video during an activity
## Bug Fixes / Improvements
- Added "Remarkable" as an option for the referral source in the onboarding
- Modifications for the onboarding sign up page
- Show current time on full screen popups
- Changes to the Focus Mode editing screen

# v152 (Apr 28 - 2023)
## Bug Fixes / Improvements
- Fix for blurring of blocked sites and apps
- Fix for idle time issue

# v151 (Apr 28 - 2023)
## New Features
- Handle appointment reminders from Late No More
## Bug Fixes / Improvements
- Fix for showing micro breaks when in postpone mode
- Fix for natural break detection if laptop lid is closed
- When using the skip feature during Deactivate, add the option to select: "I already did it"
- Fix for remaining focus time to countdown in real time

# v150 (Apr 26 - 2023)
## Bug Fixes / Improvements
- Changes to onboarding screens
- Allow setting blocked URLs for a focus mode
- Fixes for issues with morning routine

# v149 (Apr 25 - 2023)
## Bug Fixes / Improvements
- Prevent showing screensaver while activity is playing
- Fixes for AI tab in settings
- Fixes for AI system opt-in
- Tweaks for the toolbox popup for allowed app activity
- Changes to onboarding screens

# v148 (Apr 22 - 2023)
## Bug Fixes / Improvements
- Checks for background processes when opening app
- Tweaks to the pomodoro/focus mode break
- Settings added to the toolbox popup for allowed app activity
- Let user opt-in to use the AI system
- Separate tab for AI in Settings
- Ask users to opt into the personalised routine motivation message

# v147 (Apr 22 - 2023)
## New Features
- Show daily inspiration webview at start of morning/evening routine
- Show the probability and also a pop-up if the page is allowed by AI
- Show micro breaks when in postpone mode
## Bug Fixes / Improvements
- Fix for natural break detection if the the laptop lid is closed
- Disable micro breaks by default in Pomodoro popup

# v146 (Apr 20 - 2023)
## New Features
- Implemented AI to determine if an app or site should be blocked while in Cuddly Bear mode
## Bug Fixes / Improvements
- Show text instructions for an activity

# v145 (Apr 18 - 2023)
## Bug Fixes / Improvements
- Improvements to the brain dump screen prior to taking a break
- Show tooltip for Lock Focus on Current Activity feature
- Show a warning if a duration longer than 90 minutes is selected for a focus session
- Allow resizing of the Preferences window
- Show the toolbox of allowed app and websites during an activity or focus session

# v144 (Apr 12 - 2023)
## Bug Fixes / Improvements
- Updates to onboarding
- Fix: Always blocked URLs to block immediately even in cuddly bear mode
- Updates to the Quit dialog
- Removed timer to postpone breaks when using low friction mode
- Update to the How to Start a Focus Block screenshot in the onboarding quick tips

# v143 (Apr 11 - 2023)
## New Features
- Allow testing of blocking function during onboarding
## Bug Fixes / Improvements
- Updates to onboarding screens

# v142 (Apr 3 - 2023)
## New Features
- Added help section in preferences
## Bug Fixes / Improvements
- Show 'Brain Dump' in the main menu if you have noted anything in your brain dumps
- Disable microbreaks by default when starting a Pomodoro
- Show a warning if you choose to run in Grizzly Bear mode
- Changes to the Quit dialog if you're in the middle of a routine with allowed app activity
- Added a postpone link in the Habit resume countdown popup

# v141 (Mar 29 - 2023)
## New Features
- Can now trigger an activity in a calendar schedule via LateNoMore by indicating the activity name in the event description with "fbtrigger:{activity_name}"
## Bug Fixes / Improvements
- Be able to select from Focus Mode templates during onboarding
- Fix for the "End of Focus Block" screen when pressing tab to change focus between text boxes
- Removed requirement to confirm password in the signup window
- Added support for running shell scripts before and after a focus mode
- Allow for deleting a URL in the Edit Web URL window in the Blocked URLs list
- Implemented a new API for checking user subscription
- Changes to the Quit dialog postpone time options

# v140 (Mar 25 - 2023)
## New Feature
- Run a chosen activity that is scheduled in iCal via the LateNoMore app by indicating activity id in the event description with "fbtrigger:{activity_id}"
## Bug Fixes / Improvements
- Added minimize and Exit Full Screen buttons for the onboarding screens
- Show your routines and habits progress in the Stats tab of Preferences
- Removed the Cancel button from the popup alert when a focus mode is about to end

# v139 (Mar 22 - 2023)
##New Features
- Blur non-allowed websites or apps that are opened in Cuddly Bear mode

# v138 (Mar 20 - 2023)
## New Features
- Ability to resume your current activity when exiting from screen lock
## Bug Fixes / Improvements
- Improve UI for Office Mode / Work From Home
- Relocated "Block Notifications while Focusing" from Advanced setting to main focus mode setting
- In Postpone Habits popup, changed the Cancel button text to "Resume Habits"
- Improvements to Onboarding UI

# v137 (Mar 16 - 2023)
## New Features
- Allow choosing a Habit Pack in the Onboarding process

# v136 (Mar 15 - 2023)
## Bug Fixes / Improvements
- Stability fixes

# v135 (Mar 14 - 2023)
## Bug Fixes / Improvements
- Tweaks for the Permanently Allow apps/urls popup window
- Tweaks to the End of Focus Block popup window
- Tweak to the Brain Dump popup
- Change to Start Focus Mode popup
- Improvements to onboarding cards
- Simplify temporarily allowing pop-up

# v134 (Mar 13 - 2023)
## New Features
- Added option to Skip microbreaks during work blocks in the Focus Mode start screen
- Allow pausing focus modes

# v133 (Mar 11 - 2023)
## New Features
- Ability to add new keywords for allowed URLs at the end of a focus mode session
- Allow extending a focus mode session in the popup alert when a focus mode is about to end

# v132 (Mar 8 - 2023)
## New Features
- Added minimise icon and renamed "Please Spare Me" to "Exit Full Screen"
- Support habits that only apply on certain days of the week
- Streamlined the settings interface
- Suggest keywords to allow at the end of focus modes
- Show 2 minute warning prior to focus mode ending
- Prompt for what you were working on prior to starting the break so breaks don't disrupt workflow
## Bug Fixes / Improvements
- Peferences UI changes
- Added explanation for the focus mode learning process when temporarily allowing a URL for the first time
- Allow editing suggested keywords for allowed URLs at the end of a focus mode session
- Enhanced video randomness for more varied break activities
- Implemented optimizations for application stability

# v121 (Jan 23 - 2023)
## New Features
- Focus Music (Tools > Focus Music): we've added some curated music to get you in the zone while you're working/studying
- Note taking: you can now write notes during/after habits (good if you don't have an existing journaling app)
- Allow URLs/apps after focus block: at the end of a focus block, you can now save the URLs that you temporarily allowed in your focus mode settings.
- Offline improvements: app now works seamlessly while offline
- Fine grained password rules: e.g. allow postponing without a password during the morning routine but not in the evening
- Run breaks during habits: helpful if you have long habits (e.g. 90 minutes of deep work) where you are using your computer
## Bug Fixes / Improvements
- Numerous stability fixes (e.g. problems with Focus Bear taking over one of the monitors inappropriately)
- Improvements to meeting detection
