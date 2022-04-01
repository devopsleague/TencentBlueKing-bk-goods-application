# Generated by Django 2.2.6 on 2022-04-01 20:16

from django.db import migrations


def add_new_organizaition(apps, schema_editor):
    Organization = apps.get_model('good_apply', 'Organization')
    obj = Organization.objects.create(id=1000000, group_name='GoodApply')
    obj.delete()


class Migration(migrations.Migration):

    dependencies = [
        ('good_apply', '0013_auto_20220401_2013'),
    ]

    operations = [
        migrations.RunPython(add_new_organizaition),
    ]
