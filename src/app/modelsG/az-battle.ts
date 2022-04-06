export interface AzBattle {
  _id: string;
  reward: string;
  location: string;
  img_url: string;
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
