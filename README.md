# End-to-end Testing of Reptile Riddles

In this project, I test a quiz application named [Reptile Riddles](https://github.com/sokqa/reptile-riddles).
My primary goal is to get familiar with [Playwright](https://playwright.dev/docs/intro), but showcasing my approach to e2e testing is also an objective here.

## Current Status

As of 28 August 2025, I have created tests for user management features like login and registration.
Features concerning creating quizzes and playing them are to be tested in later sprints.

## System Under Testing

[Reptile Riddles](https://github.com/sokqa/reptile-riddles) isn't deployed so it must be run locally.
It is a fully dockerized application.
Please see its readme for instructions on how to run it.

**The existence of the test user (username: test, password: test) is a prerequisite for the automated tests.**
Please create it before running the tests.

## Exploratory Testing

Before automating anything, I conducted some exploratory testing.
See `exploratory_testing/` for some preparation notes and results.

## Automated Tests

### Install Playwright

Playwright can be installed via `npm`.
My OS (Fedora 42) is not supported, however, so I used [an Ubuntu distrobox](https://gist.github.com/pskopek/de9d79cf0511839dd5c97703be5cc624?permalink_comment_id=5731662#gistcomment-5731662) workaround to get it running.

On a supported OS, once this repo is cloned and you have navigated into its directory, run:

Install dependencies:
```shell
npx playwright install-deps
```

### Run Tests

Make sure `BASE_URL` is set correctly in the test script.

Then run:

```shell
npx playwright test
```

### Results

See report (specified in console output after a successful test run) for test results.

