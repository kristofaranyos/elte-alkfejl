import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  id: number;
  item: Item;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    bprice: new FormControl(),
    sprice: new FormControl(),
  });

  constructor(
  	private route: ActivatedRoute,
  	private itemService: ItemService) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.item = await this.itemService.getItem(this.id);
    this.form.get('name').setValue(this.item.name);
    this.form.get('bprice').setValue(this.item.bprice);
    this.form.get('sprice').setValue(this.item.sprice);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async send() {
  	this.item.name = this.form.getRawValue()["name"];
  	this.item.bprice = this.form.getRawValue()["bprice"];
  	this.item.sprice = this.form.getRawValue()["sprice"];
  	await this.itemService.putItem(this.item, this.item.id);
  }

}
