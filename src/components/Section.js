export default class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItem(item) {
            this._renderer(item)
    }

    renderItems() {


      this._renderedItems.reverse().forEach(item => {
          this._renderer({ name: item.name, link: item.link, _id: item._id, owner: item.owner._id, ownerId: item.owner._id, likes: item.likes });
        })
    }

    addItem(element) {
        this._container.prepend(element)
    }
}
