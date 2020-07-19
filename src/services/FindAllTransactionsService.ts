import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface FindTransactionDTO {
  transactions: Transaction[];
  balance: Balance;
}
class FindAllTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): FindTransactionDTO {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    return { transactions, balance };
  }
}
export default FindAllTransactionService;
