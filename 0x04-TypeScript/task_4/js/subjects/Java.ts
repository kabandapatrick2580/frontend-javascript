namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number; // Add optional attribute to Teacher interface
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher?.experienceTeachingJava) {
          return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
      }
    }
    export const java = new Java(); // Export the constant java
  }
  