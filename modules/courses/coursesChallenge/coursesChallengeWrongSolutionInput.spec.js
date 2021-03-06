import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import { admin, student } from '../../user/_data/user.data';
import CoursesPage from '../_page/CoursesPage';
import ChallengePage from '../_page/ChallengePage';
import { courseData } from '../_data/courseCreateData';
import { challengeData } from '../_data/challengeCreateData';
import Notification from '../../_page/Notification';
import Menu from '../../_page/Menu';

describe(' STUDENT COURSE CHALLENGE VALID INPUT', () => {
  before('should login as Admin, create Course, create Challenge', () => {
    LoginPage.login(admin);
    CoursesPage.createNewCourseGlobal;
    ChallengePage.createNewChallengeGlobal;
  });

  it('should open on created course click EDIT', () => {
    Menu.coursesLink.click();
    CoursesPage.findCourse.click();
    CoursesPage.editBtn.click();
  });

  //   it('should add created challenge to course', () => { });

  it('should logout', () => {
    LogoutPage.logout();
  });

  it('should login as Student, open created course', () => {
    LoginPage.login(student);
    Menu.coursesLink.click();
    CoursesPage.findCourse.click();
  });

  it('should confirm h1, describe ', () => {
    expect(Menu.h1.getText()).eq(courseData.name);
    expect(CoursesPage.courseDescription.getText()).eq(courseData.description);
  });

  it('should click button "Start course" ', () => {
    CoursesPage.startCourseBtn.click();
  });

  // it('should confirm challenge name', () => {
  //   expect(ChallengePage.challengeInsideCourseName.getText()).eq(challengeData.name);
  // });
  //
  // it('should fill in WRONG solution in "Write your solution here" textarea', () => {
  //   ChallengePage.challengeInsideCourseTextarea.setValue('let a === 9087');
  // });
  //
  // it('should click button "Validate solution" ', () => {
  //   ChallengePage.challengeInsideCourseValidateBtn.click();
  //   browser.pause(1000);
  // });
  //
  // it('should confirm tests NOT passed', () => {
  //   expect(ChallengePage.challengePassArray.length).notEqual(challengeData.testsQuantity);
  // });
  //
  // it('should confirm FAIL notification wrapper is Displayed', () => {
  //   expect(Notification.fail.isDisplayed()).true;
  // });
  //
  // it('should confirm challenge NOT marked as a "Completed"', () => {
  //   ChallengePage.challengeCompleteMark.isDisplayed().false;
  // });
});
