import type { Testimonial } from "#imports";

export default interface City {
    id: string;
    name: string;
    description: string;
    link: string;
    testimonials: Testimonial[];
}