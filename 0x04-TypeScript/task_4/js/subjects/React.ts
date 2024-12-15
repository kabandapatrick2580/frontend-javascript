namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number; // Add optional attribute to Teacher interface
    }
  
    export class React extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher?.experienceTeachingReact) {
          return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
      }
    }
  }
  