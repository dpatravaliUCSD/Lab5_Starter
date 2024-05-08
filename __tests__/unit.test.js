// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Tests isPhoneNumber
  //Test 1: tests a valid phone number
  test('is 858-775-3956 a valid phone number', () => {
    expect(isPhoneNumber("858-775-3956")).toBe(true);
  });

  //Test 2: tests another valid phone number
  test('is (858)-775-3956 a valid phone number', () => {
    expect(isPhoneNumber("(858)-775-3956")).toBe(true);
  });

  //Test 3: tests an invalid valid phone number
  test('is 858-775 a valid phone number', () => {
    expect(isPhoneNumber("858-775")).toBe(false);
  });

  //Test 4: tests another invalid phone number because it didn't pass a string
  test('is 858-775-3956 a valid phone number', () => {
    expect(isPhoneNumber(858-775-3956)).toBe(false);
  }); 

//Tests isEmail
  //Test 1: tests a valid email
  test('is dpatravali@icloud.com a valid email', () => {
    expect(isEmail("dpatravali@icloud.com")).toBe(true);
  });

  //Test 2: tests another valid email
  test('is dhruv@gkdks.pd a valid email', () => {
    expect(isEmail("dhruv@gkdks.pd")).toBe(true);
  });

  //Test 3: tests an invalid email
  test('is dhruv.patravali#icloud.com a valid email', () => {
    expect(isEmail("dhruv.patravali#icloud.com")).toBe(false);
  });

  //Test 4: tests another invalid email
  test('is dhruv.patravali@icloud a valid email', () => {
    expect(isEmail("dhruv.patravali@icloud")).toBe(false);
  });

//Tests isStrongPassword 
  //Test 1: tests a valid password
  test('is hellothere395 a strong password', () => {
    expect(isStrongPassword("hellothere395")).toBe(true);
  });

  //Test 2: tests another valid password
  test('is friendly420 a strong password', () => {
    expect(isStrongPassword("friendly420")).toBe(true);
  });

  //Test 3: tests an invalid password
  test('is 420friendly a strong password', () => {
    expect(isStrongPassword("420friendly")).toBe(false);
  });

  //Test 4: tests another invalid password
  test('is hellothere39539293 a strong password', () => {
    expect(isStrongPassword("hellothere39539293")).toBe(false);
  });

//Tests isDate 
  //Test 1: tests a valid date
  test('is 03/25/2003 a valid date', () => {
    expect(isDate("03/25/2003")).toBe(true);
  });

  //Test 2: tests another valid date
  test('is 1/1/2033 a valid date', () => {
    expect(isDate("1/1/2033")).toBe(true);
  });

  //Test 3: tests an invalid date
  test('is 03/25/03 a valid date', () => {
    expect(isDate("03/25/03")).toBe(false);
  });

  //Test 4: tests another invalid date
  test('is 03-21-2003 a valid date', () => {
    expect(isDate("03-21-2003")).toBe(false);
  });

//Tests isHexColor 
  //Test 1: tests a valid hex color
  test('is #BFD a valid hex number', () => {
    expect(isHexColor("#BFD")).toBe(true);
  });

  //Test 2: tests another valid hex number
  test('is 142BFD a valid hex number', () => {
    expect(isHexColor("142BFD")).toBe(true);
  });

  //Test 3: tests an invalid hex number
  test('is #ABG a valid hex number', () => {
    expect(isHexColor("#ABG")).toBe(false);
  });

  //Test 4: tests another invalid hex number
  test('is #69 a valid hex number', () => {
    expect(isHexColor("#69")).toBe(false);
  });