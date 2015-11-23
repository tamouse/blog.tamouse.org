---
layout: page
title: "Implementing Password Recovery"
---
Password recovery is a process which becomes necessary when a genuine application user is unable to authenticate due to lost or forgotten passwords. There are several challenges in the implementation of an automated password recovery process as passwords are often the only verifiable identifier which is known only to the user. Implementation of an insecure password recovery process often results in the following risks:

* A malicious user can use an automated tool to initiate password recovery request for hundreds of genuine users resulting in SPAM.
* Sensitive information like OLD password or a temporary-NEW password is sent in clear text email to the genuine user making it susceptible to a sniffer.
* Weak authentication mechanisms like secret questions (Which is your favorite color?) with easily guessable answers are used to authenticate the user.

## Secure implementation of automated password recovery

When a "Forgot Password" link is clicked by a user, his primary concern is whether he has reached a valid page or a phishing site. To avoid such concerns, it is good if all the pages are SSL enabled.

At the first page ask the user for his user-id for which the recovery process is getting initiated. Also query some details to partially confirm his identity &mdash; some details like zip code and last name of the user. These details may not be entirely "secret" but will still reduce the number of people who can proceed to next stage. It is still better if we use random user details instead of having the same question at all times.

Correct answers to the above will take the user to second page. At the second page ask the user the secret question he had provided at the time of registration. If the answer is true send an email to the user with a link. Provide a Captcha (Completely Automated Public Turing test to tell Computers and Humans Apart) here to stop the automated tools. At the time of registration, it is ideal to have the user choose his questions and provide answers in addition to providing standard set of questions. Questions like "What is your favorite color" should be avoided from the standard set.

Correct answers to the secret question should trigger an automated mail to the user's email id (preset and confirmed by the user at the time of registration) which would contain a https link to page "Select a new password". At this page application should again validate the user's secret question. A genuine response to the secret question should take him directly to the page that would request the user to enter a new password and save this in the application password-database. The link should contain an ID or token number which gets invalidated after the password has been changed. Prompting for the secret question a second time, is to ensure that an unauthorized person has not sniffed the user's email and got access to the link.

The above process addresses all the key security issues pertaining to password recovery. To summarize:

* Enable SSL for all pages related to password recovery
* Have multi-stage validation-personal details and secret question
* Use CAPTCHAS to defend against automated tools
* For valid users send an email with link to "Select a new password"
* Revalidate the user when he reaches the link
* Invalidate the link soon after password is changed
