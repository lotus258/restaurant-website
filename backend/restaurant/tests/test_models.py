from django.test import TestCase
from restaurant.models import Menu, Category

class TestMenu(TestCase):
    def test_get_item(self):
        category = Category.objects.create(title="dessert", slug="dessert")
        item = Menu.objects.create(title="IceCream", price=4.5, inventory=100, category=category)
        self.assertEqual(str(item), "IceCream : 4.5")