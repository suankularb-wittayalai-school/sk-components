export type ComponentList = Array<ComponentGroup>;

export type ComponentGroup = {
  groupName: {
    "en-US": string;
    th?: string;
  };
  content: Array<ComponentListItem>;
};

export type ComponentListItem = {
  id: number;
  content: {
    name: string;
    subtitle: {
      "en-US": string;
      th?: string;
    };
  };
};

export type ComponentDetails = {
  id: number;
  name: string;
  subtitle: {
    "en-US": string;
    th?: string;
  };
  guidelines: {
    body: {
      "en-US": string;
      th?: string;
    };
    resources?: {
      material?: {
        equiv: string;
        url: string;
      };
    };
  };
  implementation: {
    html: string;
    react?: string;
  };
  properties: Array<ComponentProperty>;
};

export type ComponentProperty = {
  id: number;
  name: string;
  type: string;
  desc: {
    "en-US": string;
    th?: string;
  };
  required?: boolean;
  defaultValue?: string;
};
