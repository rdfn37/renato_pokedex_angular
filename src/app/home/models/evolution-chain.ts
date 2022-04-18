export interface EvolutionChain {
  chain: {
    evolves_to: [
      {
        evolution_details: [
          {
            trigger: {
              name: string,
            }
          }
        ],
        evolves_to: [
          {
            evolution_details: [
              {
                trigger: {
                  name: string,
                }
              }
            ],
            evolves_to: [
              {

              }
            ],
            species: {
              name: string;
              url: string;
            }
          }
        ];
        species: {
          name: string;
          url: string;
        }
      }
    ];
    species: {
      name: string;
      url: string;
    }
  };
  id: number;
}
