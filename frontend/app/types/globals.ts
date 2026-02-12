export type ButtonType = {
    label:string | React.ReactNode,
    style?:string,
    type: "btn-white" | "btn-grey" | "btn-softBlack" | "btn-black" | "btn-orange" ,
    onClick?:()=>void,
    isLink?:boolean,
    href?:string,
    disabled?:boolean
}



export interface AlertData {
  type: "error" | "success",
  message: string
}


export interface UserInterface {
  id: string;
  email: string;
  name: string;
}


export interface TaskInterface {
  id?: string;
  title: string;
  description: string | null;
  status: TaskStatusType
  dueDate: string;
  createdAt?: string;
  updatedAt?: string;
  projectId?: string;
  creatorId?: string;
  taskId?:string;
  project?:ProjectInterface;
  comments?:CommentInterface[],
  assignees?:Array<TaskUserAssigned>,
  assigneeIds?:string[]
}


export type TaskStatusType = 'TODO' | 'IN_PROGRESS' | 'DONE' | string
   
export type AiTasks = Array<{title:string,desc:string}> 

export interface MemberInterface {
  id: string;
  userId: string;
  projectId: string;
  role: 'ADMIN' | 'CONTRIBUTOR';
  joinedAt: string;
  user: UserInterface;
}


export interface ProjectInterface {
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  owner: UserInterface;
  members: MemberInterface[];
  tasks: TaskInterface[];
  completedTasks: TaskInterface[] | string; 
  userRole: 'ADMIN' | 'CONTRIBUTOR';
  createdAt: string;
  updatedAt: string;
  _count: {
    tasks: number;
  };
}


export interface ContributorInterface{
  id:string,
  email:string,
  name:string
}


export interface CommentInterface {
  id: string;
  content: string;
  authorId: string;
  taskId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    email: string;
    name: string;
  };
}


export interface TaskUserAssigned {
  assignedAt: string;
  id: string;
  user: UserInterface;
}