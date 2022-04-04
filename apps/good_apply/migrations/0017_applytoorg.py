# Generated by Django 2.2.6 on 2022-04-02 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('good_apply', '0016_auto_20220401_2204'),
    ]

    operations = [
        migrations.CreateModel(
            name='ApplyToOrg',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('create_user', models.CharField(blank=True, max_length=120, null=True, verbose_name='创建用户')),
                ('update_user', models.CharField(blank=True, max_length=120, null=True, verbose_name='更新用户')),
                ('apply_group_id', models.BigIntegerField(verbose_name='申请加入组id')),
                ('status', models.IntegerField(choices=[(1, '审核中'), (2, '同意加入'), (3, '拒绝加入')], verbose_name='申请状态')),
            ],
            options={
                'verbose_name': '申请加入组表',
                'verbose_name_plural': '申请加入组表',
            },
        ),
    ]