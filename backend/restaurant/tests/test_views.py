from django.test import TestCase
from restaurant.models import Menu
from restaurant.serializers import MenuItemSerializer

class MenuViewTest(TestCase):
    def setUp(self):
        self.menu_item1 = Menu.objects.create(title="Pizza", price=10.99, inventory=50)
        self.menu_item2 = Menu.objects.create(title="Noodle", price=3.45, inventory=30)
        self.menu_item3 = Menu.objects.create(title="Pasta", price=12.99, inventory=20)

    def test_getall(self):
        menu_items = Menu.objects.all()
        serializer = MenuItemSerializer(menu_items, many=True)
        expected_data = [
            {"id": self.menu_item1.id, "title": "Pizza", "price": "10.99", "inventory": 50},
            {"id": self.menu_item2.id, "title": "Noodle", "price": "3.45", "inventory": 30},
            {"id": self.menu_item3.id, "title": "Pasta", "price": "12.99", "inventory": 20},
        ]
        self.assertEqual(serializer.data, expected_data)