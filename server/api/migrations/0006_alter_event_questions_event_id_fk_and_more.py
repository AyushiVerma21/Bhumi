# Generated by Django 4.2.3 on 2023-07-15 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_feedback_answers_event_ans_id_fk'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event_questions',
            name='Event_id_fk',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='feedback_answers',
            name='Event_ans_id_fk',
            field=models.IntegerField(null=True),
        ),
    ]
