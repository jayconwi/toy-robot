

## **Toy Robot Coding Challenge**
This solution was built as my entry point in a potential career role in a company.

The UI is not provided via CLI, but it was expanded in HTML 
and the commands are represented as HTML controls.

___
**Steps to run the solution:** 
 Note: This is preconfigured to compile using gulp and launch in a browser. 

In order to run this app, you must do the following in sequence:
 - [ ] Open the solution in VS code
 - [ ] Launch  terminal within VS code and execute `npm install`
 - [ ] Press F5 to launch the app in browser
___
**Instructions:**
 - [ ] You are required to simulate a toy robot moving on a square
       tabletop, of dimensions 5 units x 5 units. 
 - [ ] LThere are no other obstructions on the table surface. The robot is free to roam
       around the surface of the table, but must be prevented from
       falling to destruction. 
 - [ ] Any movement that would result in the robot falling from the table must be prevented, however further
       valid movement commands must still be allowed. 
 - [ ] All commands should be discarded until a valid place command has been
       executed.
 - [ ] The solution must be written in Typescript The UI can
       be provided via CLI, however you are free to expand on this. 
 - [ ] Keep it simple, keep it DRY, but don’t over complicate or over
       engineer, comment and test as much as possible. 
 - [ ] Include a README file with instructions on how to build/compile your solution and how to run it. 
 - [ ] Share your code via a public GitHub repository, [git bundle](https://git-scm.com/docs/git-bundle) or zip file.
___
**Commands:**
Note: All commands should provide output indicating whether or not they succeeded.
- **PLACE X,Y,DIRECTION**  
X and Y are integers that indicate a location on the tabletop.
DIRECTION is a string indicating which direction the 
robot should face. It it one of the four cardinal directions: NORTH, EAST, SOUTH or WEST.

- **MOVE**  
Instructs the robot to move 1 square in the direction it is facing.

- **LEFT**  
Instructs the robot to rotate 90° anticlockwise/counterclockwise.

- **RIGHT**  
Instructs the robot to rotate 90° clockwise.

- **REPORT**  
Outputs the robot's current location on the tabletop and the direction it is facing.
