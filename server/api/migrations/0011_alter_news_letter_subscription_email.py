# Generated by Django 4.2.3 on 2023-07-15 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_news_letter_subscription_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news_letter_subscription',
            name='email',
            field=models.EmailField(max_length=254, primary_key=True, serialize=False, unique=True),
        ),
    ]
