export interface IDataStoreService {
  create(data, ...args): Promise<any>
  update(id, data, ...args): Promise<any>
  getOne(id, ...args): Promise<any>
  getAll(arg?, ...args): Promise<any>
  delete(id, ...args): Promise<any>
}
