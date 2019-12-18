import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	items: Item[];
	displayedColumns = ['id', 'name', 'bprice', 'sprice', 'vendor', 'edit', 'remove'];

  constructor(private itemService: ItemService) { }

    async ngOnInit() {
        this.items = await this.itemService.getItems();
        console.log(this.items);
    }

    async remove(itemid: Number) {
    	await this.itemService.removeItem(itemid);
    	this.items = await this.itemService.getItems();
    }
}
