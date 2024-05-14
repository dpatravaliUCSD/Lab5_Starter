# Lab 5 - Dhruv Patravali (no partners)
Link to Github Pages: [Expose](https://dpatravaliucsd.github.io/Lab5_Starter/expose.html) <br>
Link to Github Pages: [Explore](https://dpatravaliucsd.github.io/Lab5_Starter/explore.html)
<br>
### Pt.3 Unit Testing with Jest
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
  No I would not. This is too broad of a feature to test with unit testing, where if we ran into an issue it could be a server issue, something regarding the messaging contents, or a wide variety of problems. A unit test wouldn't necessarily help us narrow down the issue if it didn't pass. 
2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
  Yes I would. Designing some unit tests to test if we can send messages of different lengths would help us determine if the "max message length" feature is working correctly, as it easy to isolate the cause of error for an issue like this while designing unit tests. 
