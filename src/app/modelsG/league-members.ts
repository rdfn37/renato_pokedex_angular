export interface LeagueMembers {
  _id: string;
  name: string;
  img_url: string;
  speciality: string;
  description: string;
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
