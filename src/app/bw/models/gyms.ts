export interface Gyms {
  location: string;
  leader: [
    {
      name: string;
      img_url: string;
      team: [
        {
          name: string;
          img_url: string;
          level: string;
          type: [string];
          ability: string;
          moves: [string];
        }
      ];
    }
  ];
}
