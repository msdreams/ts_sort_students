
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedSudents:Student[] = [...students];

  if (order === 'asc') {
    return sortedSudents.sort((a, b) => {
      const sum = (total:number, current:number):number => total + current;

      switch (sortBy) {
        case 'name':
        case 'surname':
          return a[sortBy].localeCompare(b[sortBy]);
        case 'age':
          return a[sortBy] - b[sortBy];
        case 'grades':
          return a[sortBy].reduce(sum, 0) / a[sortBy].length
            - b[sortBy].reduce(sum, 0) / b[sortBy].length;
        case 'married':
          return (a.married ? 1 : -1) - (b.married ? 1 : -1);
        default:
          return 0;
      }
    });
  }

  return sortedSudents.sort((a, b) => {
    const sum = (total:number, current:number):number => total + current;

    switch (sortBy) {
      case 'name':
      case 'surname':
        return b[sortBy].localeCompare(a[sortBy]);
      case 'age':
        return b[sortBy] - a[sortBy];
      case 'grades':
        return b[sortBy].reduce(sum, 0) / b[sortBy].length
          - a[sortBy].reduce(sum, 0) / a[sortBy].length;
      case 'married':
        return (b.married ? 1 : -1) - (a.married ? 1 : -1);
      default:
        return 0;
    }
  });
}
