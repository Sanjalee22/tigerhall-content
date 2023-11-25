interface EdgeType {
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

interface ContentInformationProps {
  category: string,
  name: string,
  expertFirstName: string,
  expertLastName: string,
  expertTitle?: string
}

interface ContentStatusProps {
  uri: string,
  completionPercentage: number,
  durationMinutes: number
}

interface ContentCardProps {
  edge: EdgeType;
}

interface ProgressBarProps {
  progressPercent: number;
}

interface SearchBarProps {
  onSearch: (value: string) => void;
}

interface SearchResultProps {
  keyword: string
}

interface ContentListProps {
  items: EdgeType[]
}
