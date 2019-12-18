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

  constructor(private itemService: ItemService) { }

    async ngOnInit() {
        this.items = await this.itemService.getItems();
        console.log(this.items);
    }
}
