# angular-synergy

> State management to Angular 12 .Inspired by Vuex

## Install

```bash
npm install --save angular-synergy
     or
yarn add angular-synergy
```

## Usage

##### Create a store

```ts
import { createStore, SynergyContextProps } from "angular-synergy";

export type Person = { name: string; lastName: string };

const store = createStore<Person>({
  name: "Person",
  state: {
    name: "Harry",
    lastName: "Potter",
  },
  actions: {
    randomName({ commit }: SynergyContextProps<Person>) {
      const words = [
        "Kiara",
        "Izan",
        "Julissa",
        "Neytiri",
        "Amara",
        "Maverick",
        "Kya",
      ];
      commit("setName", words[Math.floor(Math.random() * words.length)]);
    },
    changeLastName({ commit }: SynergyContextProps<Person>, value: string) {
      commit("setLastName", value);
    },
  },
  mutations: {
    setName(state: Person, value: string) {
      state.name = value;
    },
    setLastName(state: Person, value: string) {
      state.lastName = value;
    },
  },
  getters: {
    getFullName(state: Person) {
      return `${state.name} ${state.lastName}`;
    },
  },
});

export default store;
```

###### CreateStore options

> persistence: use it to save the state of the store while the session is active. (Default: false)

##### Import module to your application

```ts
import { NgModule } from "@angular/core";
import { AngularSynergyModule } from "angular-synergy";

import store from "./store/PersonStore";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [],
  imports: [
    AngularSynergyModule.withStores({
      person: store,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

##### Use in Component

###### HTML

```ts
 <div class="card-example">
    <div class="card-example-actions">
      <input type="button" (click)="onClickRandomName()" value="Random Name" />
      <input type="button" (click)="onClickLastName()" value="Last Name" />
    </div>

    <div class="card-example-content">
      <span>
        <b>Name:</b>
        {{ buildStore.state.name }}
      </span>

      <span>
        <b>Last Name:</b>
        {{ buildStore.state.lastName }}
      </span>

      <span>
        <b>Full Name:</b>
        {{ buildStore.getters.getFullName }}
      </span>
    </div>
  </div>
```

###### TS

```ts
import { Component } from "@angular/core";
import { AngularSynergyStore } from "angular-synergy";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  constructor(private angularSynergyStore: AngularSynergyStore) {}

  get buildStore() {
    return this.angularSynergyStore.get("person");
  }

  onClickRandomName() {
    this.buildStore.dispatch("randomName");
  }

  onClickLastName() {
    const lastName = prompt("Please enter your last name", "Lakers 23");
    this.buildStore.dispatch("changeLastName", lastName);
  }
}
```

## License

MIT © [Rafael Mayor Alberto]
