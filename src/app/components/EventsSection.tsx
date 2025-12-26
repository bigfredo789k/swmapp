import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { FloatingDots } from './FloatingDots';

export function EventsSection() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Senior Community Day',
      date: 'January 15, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Center',
      description: 'Join us for an afternoon of activities, refreshments, and community connection for our senior members.',
    },
    {
      id: 2,
      title: 'Youth Empowerment Workshop',
      date: 'January 22, 2026',
      time: '10:00 AM - 2:00 PM',
      location: 'Recreation Hall',
      description: 'Interactive workshops designed to inspire and empower youth with leadership skills and positive guidance.',
    },
    {
      id: 3,
      title: 'Neighborhood Beautification',
      date: 'February 5, 2026',
      time: '9:00 AM - 1:00 PM',
      location: 'Various Locations',
      description: 'Volunteer together to enhance the beauty of our neighborhoods through planting, cleaning, and community art.',
    },
    {
      id: 4,
      title: "Valentine's Day Celebration",
      date: 'February 14, 2026',
      time: '3:00 PM - 6:00 PM',
      location: 'Community Center',
      description: 'Spread love and joy at our annual Valentine\'s Day event with activities for all ages.',
    },
  ];

  return (
    <section id="events" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Animated Floating Dots with gray color for light background */}
      <FloatingDots count={20} color="rgba(99, 102, 241, 0.15)" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the positive change in our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-600">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={20} className="text-indigo-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock size={20} className="text-indigo-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-indigo-600" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}