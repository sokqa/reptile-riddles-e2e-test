# Report - Exploratory Testing - User Management

- Performed by Sokka Limbek
- Performed on August 2, 2025

## Notes

Starting time: 17:45

1. Before logging in
  - Menu items redirect to login page, except for game list, which I can see is empty
  - **No feedback for bad credentials**, just a page reload
  - Links on login and registration page pointing to each other work
2. Registration
  - Hitting Enter with filled registration form does nothing; button needs to be clicked
  - (Same on login page)
  - Registration with simple username, email and password succesful, lets me login after
  - No feedback about successful registration though
  - No check on password complexity
  - No validation on email format, registration with invalid email also lets me login afterwards
  - Registration with existing user name does not work, but no feedback about it
  - Registration with email empty works
  - Registration with empty password: cannot login but cannot register with same user again; possibly creating user that cannot be used
3. After logging in
  - Logout button works
  - Account menu displays an empty login page (link under button points to login)
    - Filling it with valid credentials does log me in as another user
    - Filling it with nonsense does not log me out
  - There is no obvious way to check what user I'm logged in as (workaround: creating empty quizzes with user name in title)

End time: 18:15

## Recommendations based on current state

- For more improved UX, I would recommend adding more feedback about unsuccessful login, and both successful and unsuccessful registration.
- I also recommend improving UX by implementing sending login and registration forms by hitting Enter.
- I recommend implementing validation for registration data, including existence, format (email) and complexity (password) in order to protect user accounts and to prevent users from creating unusable user accounts.
- Login page should be unavailable while logged in to prevent confusion and ambiguity about logged in user.
- I recommend implementing Account menu so that account data and management features (e.g. data modification, deletion of account) are available for users.

## Review of user stories

Currently, there are 2 user stories that describe the user management functionality:
- As a new user, I want to choose my own username and password during registration, so that I can personalize my login credentials.
- As a user, I want an option to stay logged in, so that I don’t have to enter my credentials every time.

### Are user stories suitable for testing?

Yes.

### Do user stories cover the feature?

I think the first story covers the registration feature well.

We don't have a user story for logging in, however, which is quite esssential and must be tested.
I recommend adding:
- As a user, I want to log in, so that I can see my data and my quizzes.

As a user, I definitely want to see feedback about registration and login, especially if either has failed, so that I know what to correct. 
I'm not sure, however, if this should be added as a separate user story or as UX details to both the registration and the login user story.

The second user story about staying logged in is fine. It is not implemented at this point. I think its priority should be lower than that of failed login feedback.

## Release readiness score: 6/10

