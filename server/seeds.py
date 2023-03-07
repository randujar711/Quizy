from app import app
from models import db, User, Deck
# from faker import Faker

def run_seeds():
    # fake = Faker()
    print('Seeding database ... 🌱')
    # Add your seed data here
    with app.app_context():
      user1 = User('rmdashrfv', 'rmdashrfv@example.com', '111111111')
      db.session.add_all([user1])
      db.session.commit()

      deck1 = Deck('Sports', 'Sports', 'Interested in Sports? Test your Knowledge!','quizy-client/assets/tim-gouw-VvQSzMJ_h0U-unsplash.jpg')
      deck2 = Deck('Science', 'Science', 'Are you Einstein? Lets find out!', 'quizy-client/assets/science-beakers-blue-light.jpeg')
      deck3 = Deck('Arts & Literature', 'arts_and_leisure', 'Woah there Art major! Bet you wont get this!', 'quizy-client/assets/istockphoto-1190200652-612x612.jpeg')
      deck4 = Deck('History', 'History', 'We all fell asleep in History class. How much of it do you really know?', 'quizy-client/assets/joanna-kosinska-B6yDtYs2IgY-unsplash.jpg')
      deck5 = Deck('Music', 'Music', 'Michael Jackson or Prince? Theres only one correct answer. Choose wisley...','quizy-client/assets/photo-1470225620780-dba8ba36b745.jpeg')
      
      db.session.add_all([deck1, deck2, deck3, deck4, deck5])
      db.session.commit()
      print('Done! 🌳')


run_seeds()