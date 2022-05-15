/*
TYLER HAMVAS STUDENT#: 065071128 EMAIL: tahamvas@myseneca.ca
PASHA RAHIMI STUDENT#: 033028127 EMAIL: prahimi@myseneca.ca
LION YAKUBOV STUDENT#: 129517207 EMAIL: lyakubov@myseneca.ca
*/

#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <iomanip>
#include <occi.h>

using oracle::occi::Environment;
using oracle::occi::Connection;
using namespace oracle::occi;
using namespace std;

struct Employee
{
	int employeeNumber;
	string lastName;
	string firstName;
	string email;
	string phone;
	int reportsTo;
	string jobTitle;
};
// a structure that hold info about an employee
typedef struct Employee Employee;

// Functon Prototypes

// Function to call the main menu
int menu(void);

// Checks if input is a positive integer 
int getPositiveInteger(void);

// Function to find employees
int findEmployee(Connection* conn, int employeeNumber, struct Employee* emp);

// Function to display a single employee
void displayEmployee(Connection* conn, struct Employee emp);

// Function to display all employees
void displayAllEmployees(Connection* conn);

// Function stores the input in the employee pointer.
void insertEmployee(struct Employee* emp);

// Function to insert a new employee to the table.
void insertEmployee(Connection *conn, struct Employee emp);

// Delete the emplyee with the incoming emplyeeNumber
void deleteEmployee(Connection* conn, int employeeNumber);

// Update the entered employees phone number
void updateEmployee(Connection* conn, int employeeNumber);