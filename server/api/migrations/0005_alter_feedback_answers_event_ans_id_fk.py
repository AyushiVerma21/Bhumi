# Generated by Django 4.2.3 on 2023-07-15 17:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_feedback_answers_q1_ans_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback_answers',
            name='Event_ans_id_fk',
            field=models.ForeignKey(db_column='event_id', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.event'),
        ),
    ]
