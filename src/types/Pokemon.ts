export type Types = 'Fire' | 'Water' | 'Grass' | 'Electric' | 'Other'
export type Colors = 'Red' | 'Blue' | 'Green' | 'Yellow' | 'Orange'

export type Pokemon = {
    id: number;
    name: string;
    type: Types
    color: Colors
    image_url: string;
    level: string;
    description: string;
    created_at: Date;
}