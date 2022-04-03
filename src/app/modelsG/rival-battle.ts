export interface RivalBattle {
  _id: string;
  order: string;
  reward: string;
  location: string;
  img_url: string;
  teams: [
    {
      condition: string;
      team: [
        {
          pokemon: string;
          img_url: string;
          level: number;
          type: [string];
          ability: string;
          moves: [string];
          held_item: string;
        }
      ];
    }
  ];
}
