export interface EdgeType {
  image: {
    uri: string;
  };
  categories: Array<{
    name: string;
  }>;
  name: string;
  experts: Array<{
    firstName: string;
    lastName: string;
    title: string;
  }>;
}

export interface ContentInformationProps {
  category: string,
  name: string,
  expertFirstName: string,
  expertLastName: string,
  expertTitle?: string
}

export interface ContentStatusProps {
  uri: string,
  completionPercentage: number,
  durationMinutes: number
}

export interface ContentCardProps {
  edge: EdgeType;
}

export interface ProgressBarProps {
  progressPercent: number;
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}

export interface SearchResultProps {
  keyword: string
}

export interface ContentListProps {
  items: EdgeType[]
}
