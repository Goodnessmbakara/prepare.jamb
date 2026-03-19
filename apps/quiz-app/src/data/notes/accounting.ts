export interface StudyNote {
  id: string;
  subjectId: string;
  title: string;
  order: number;
  content: {
    overview: string;
    topics: Array<{
      title: string;
      subtopics: Array<{
        title: string;
        content: string;
        keyPoints: string[];
      }>;
      objectives: string[];
    }>;
  };
}

export const accountingNotes: StudyNote[] = [
  {
    id: "acc-1",
    subjectId: "accounting",
    title: "Introduction to Accounting",
    order: 1,
    content: {
      overview: "Accounting is the systematic process of identifying, recording, measuring, classifying, verifying, summarizing, interpreting, and communicating financial information. It provides essential data for business decision-making and external reporting.",
      topics: [
        {
          title: "Nature and Purpose of Accounting",
          subtopics: [
            {
              title: "Definition and Branches of Accounting",
              content: "Accounting is the language of business - a systematic process of recording, classifying, summarizing, and interpreting financial transactions. Main branches include: Financial Accounting (recording transactions, preparing financial statements for external users), Management Accounting (providing information for internal decision-making, planning, and control), Cost Accounting (determining costs of products/services), Auditing (examining and verifying accounting records), Tax Accounting (preparing tax returns and planning), and Government Accounting (public sector accounting).",
              keyPoints: [
                "Accounting: systematic recording of financial transactions",
                "Called 'language of business'",
                "Provides financial information for decision-making",
                "Financial accounting: external reporting (investors, creditors)",
                "Prepares financial statements following standards",
                "Management accounting: internal decision-making",
                "Cost accounting: product costing and cost control",
                "Auditing: independent examination of financial statements",
                "Tax accounting: tax compliance and planning",
                "Government accounting: public sector, fund accounting",
                "Forensic accounting: fraud investigation",
                "Each branch serves specific purposes and users"
              ]
            },
            {
              title: "Users of Accounting Information",
              content: "Accounting information serves various stakeholders: Internal users (management for planning, controlling, decision-making; employees for job security and benefits information), External users (investors for investment decisions, creditors for lending decisions, government for tax assessment and regulation, customers for business stability, suppliers for credit decisions, public for social responsibility assessment). Different users need different information, but all rely on accurate, relevant, and timely accounting data.",
              keyPoints: [
                "Internal users: owners, managers, employees",
                "Managers: planning, controlling, decision-making",
                "Employees: job security, wages, benefits information",
                "External users: investors, creditors, government, public",
                "Investors/Shareholders: profitability, investment decisions",
                "Creditors/Lenders: ability to repay, creditworthiness",
                "Government: tax assessment, regulatory compliance, statistics",
                "Customers: business continuity, service reliability",
                "Suppliers: credit decisions, business relationships",
                "Competitors: benchmarking and comparison",
                "Public/Society: employment, social responsibility, environmental impact",
                "Each user has specific information needs"
              ]
            },
            {
              title: "Accounting Concepts and Conventions",
              content: "Accounting operates on fundamental concepts and conventions that ensure consistency and reliability. Key concepts: Business Entity (business separate from owner), Going Concern (business continues indefinitely), Monetary Measurement (only monetary transactions recorded), Historical Cost (assets recorded at purchase cost), Matching (expenses matched with revenues), Accruals (transactions recorded when they occur, not when cash exchanged), Consistency (same methods used over time), Prudence/Conservatism (anticipate losses, not profits), Materiality (significant items disclosed), and Objectivity (based on verifiable evidence).",
              keyPoints: [
                "Business entity concept: business separate from owner",
                "Personal transactions kept separate from business",
                "Going concern: business continues indefinitely",
                "Assets not liquidation values",
                "Monetary measurement: only monetary transactions recorded",
                "Non-monetary factors (employee morale) not in accounts",
                "Historical cost: assets at original purchase price",
                "Matching concept: expenses matched with related revenues",
                "Accruals concept: record when earned/incurred, not cash movement",
                "Consistency: same accounting methods over periods (comparability)",
                "Prudence: don't overstate assets/income, recognize losses early",
                "Materiality: disclose significant items, ignore trivial",
                "Objectivity: based on verifiable evidence, not opinions",
                "Dual aspect: every transaction has debit and credit"
              ]
            },
            {
              title: "Accounting Equation and Double Entry",
              content: "The accounting equation is the foundation of double-entry bookkeeping: Assets = Liabilities + Capital (Owner's Equity). Assets are resources owned by the business. Liabilities are obligations to external parties. Capital is the owner's interest in the business. Every transaction affects at least two items, maintaining the equation's balance. Double-entry system records each transaction with equal debits and credits. This system provides checks and balances, reduces errors, and gives complete picture of transactions.",
              keyPoints: [
                "Accounting equation: Assets = Liabilities + Capital",
                "Assets: resources owned (cash, inventory, equipment, buildings)",
                "Liabilities: amounts owed (loans, creditors, overdrafts)",
                "Capital: owner's investment + retained profits",
                "Also: Assets = Liabilities + Capital (or A = L + E where E is equity)",
                "Expanded: Assets = Liabilities + Capital + Revenue - Expenses",
                "Every transaction maintains equation balance",
                "Double-entry system: every transaction has debit and credit",
                "Total debits = Total credits always",
                "Debit: increase in assets, decrease in liabilities/capital",
                "Credit: increase in liabilities/capital, decrease in assets",
                "Provides self-balancing system, reduces errors",
                "Forms basis of all accounting records"
              ]
            }
          ],
          objectives: [
            "Define accounting and its branches",
            "Identify users of accounting information",
            "Explain fundamental accounting concepts",
            "Understand the accounting equation",
            "Describe the double-entry bookkeeping system"
          ]
        },
        {
          title: "Books of Original Entry",
          subtopics: [
            {
              title: "Source Documents",
              content: "Source documents are original records providing evidence of business transactions. They are the basis for accounting entries. Common source documents include: Invoices (sales invoice sent to customers, purchase invoice received from suppliers), Receipts (proof of payment received), Payment Vouchers (proof of payment made), Credit Notes (issued when goods returned or overcharged), Debit Notes (sent when undercharged or returning goods to suppliers), Bank Statements, Payroll records, and Contracts. Proper documentation ensures accuracy and provides audit trail.",
              keyPoints: [
                "Source documents: original evidence of transactions",
                "Invoice: document requesting payment",
                "Sales invoice: sent to customer when selling on credit",
                "Purchase invoice: received from supplier when buying on credit",
                "Receipt: proof of cash/payment received",
                "Payment voucher: proof of cash paid out",
                "Credit note: issued for returns inward or overcharges",
                "Reduces customer's debt",
                "Debit note: issued for returns outward or undercharges",
                "Bank statement: record of bank transactions",
                "Cheque stubs: record of cheques issued",
                "Payroll: employee wages and deductions",
                "Importance: evidence, accuracy, audit trail, legal proof",
                "Documents must be properly authorized and filed"
              ]
            },
            {
              title: "Books of Prime Entry (Journals)",
              content: "Books of Prime Entry (also called Journals or Day Books) are books where transactions are first recorded from source documents before posting to the ledger. Main journals: Sales Journal/Day Book (credit sales), Purchases Journal/Day Book (credit purchases), Sales Returns Journal (returns from customers), Purchases Returns Journal (returns to suppliers), Cash Book (cash and bank transactions - acts as both journal and ledger), Petty Cash Book (small payments), and General Journal (non-routine transactions, opening entries, corrections). Journals provide chronological record and analysis of transactions.",
              keyPoints: [
                "Books of prime entry: first recording of transactions",
                "Also called journals or day books",
                "Bridge between source documents and ledger",
                "Sales journal/day book: credit sales only",
                "Columns: date, customer, invoice number, amount",
                "Purchases journal: credit purchases only",
                "Sales returns journal: goods returned by customers (returns inward)",
                "Purchases returns journal: goods returned to suppliers (returns outward)",
                "Cash book: all cash and bank receipts and payments",
                "Double column (cash and bank) or triple column (add discount)",
                "Acts as both journal and ledger",
                "Petty cash book: small cash expenses (stamps, refreshments)",
                "Usually imprest system",
                "General journal: unusual transactions, opening entries, corrections",
                "Totals posted to ledger accounts"
              ]
            },
            {
              title: "The Cash Book",
              content: "The Cash Book records all cash and bank transactions. It is unique as it serves both as a book of prime entry and a ledger account. Types: Single Column (cash only), Double Column (cash and bank), Triple Column (cash, bank, and discount). The cash book is divided into debit side (receipts) and credit side (payments). Cash receipts include cash sales, debtors' payments, capital introduced. Cash payments include purchases, expenses, creditors' payments. Regular balancing shows cash and bank balances. Petty Cash Book records small expenses, often using the imprest system where a fixed amount is maintained.",
              keyPoints: [
                "Cash book: records all cash and bank transactions",
                "Unique: both journal and ledger",
                "Double column: separate columns for cash and bank",
                "Triple column: adds discount columns (allowed and received)",
                "Debit side: receipts (cash in, bank deposits)",
                "Credit side: payments (cash out, bank withdrawals/payments)",
                "Sources of receipts: cash sales, debtors paying, capital, loans",
                "Types of payments: purchases, expenses, creditors, drawings",
                "Balancing: calculate balance c/d (carried down) and b/d (brought down)",
                "Cash balance: debit balance (asset)",
                "Bank overdraft: credit balance (liability)",
                "Petty cash book: small routine expenses",
                "Imprest system: fixed amount, reimbursed to restore level",
                "Analytical petty cash: columns for expense categories",
                "Contra entries: transfers between cash and bank"
              ]
            }
          ],
          objectives: [
            "Identify and explain source documents",
            "Describe books of prime entry and their purposes",
            "Record transactions in appropriate journals",
            "Prepare and balance a cash book",
            "Understand the petty cash imprest system"
          ]
        }
      ]
    }
  },
  {
    id: "acc-2",
    subjectId: "accounting",
    title: "Ledger Accounts and Trial Balance",
    order: 2,
    content: {
      overview: "The ledger contains all accounts where transactions are classified and summarized. The trial balance is prepared from ledger balances to check the arithmetical accuracy of the double-entry system.",
      topics: [
        {
          title: "The Ledger",
          subtopics: [
            {
              title: "Structure and Classification of Ledger Accounts",
              content: "The Ledger is the principal book containing all accounts. Each account is a record of transactions affecting a particular item. Ledgers are divided into: General Ledger (all accounts including assets, liabilities, capital, income, expenses), Sales Ledger/Debtors Ledger (individual customer accounts - money owed to business), and Purchases Ledger/Creditors Ledger (individual supplier accounts - money business owes). Each account has two sides: Debit (left) and Credit (right). Format: T-account or running balance. Transactions posted from journals to relevant ledger accounts.",
              keyPoints: [
                "Ledger: principal book of accounts",
                "Contains all accounts classified by type",
                "Account: record of transactions for specific item",
                "General ledger: nominal accounts (expenses, revenues, assets, liabilities)",
                "Sales ledger (debtors ledger): individual customer accounts",
                "Purchases ledger (creditors ledger): individual supplier accounts",
                "T-account format: debit side (left), credit side (right)",
                "Columns: date, details/particulars, folio, amount",
                "Debit side: increases in assets and expenses, decreases in liabilities and income",
                "Credit side: increases in liabilities and income, decreases in assets and expenses",
                "Posting: transferring from journals to ledger",
                "Cross-referencing: folio columns link journal and ledger",
                "Balancing accounts: calculate balance c/d and b/d"
              ]
            },
            {
              title: "Posting to Ledger Accounts",
              content: "Posting is the process of transferring transaction details from books of prime entry to the ledger. Rules: For Sales Journal - debit individual customer accounts in sales ledger, credit sales account (with total) in general ledger. For Purchases Journal - credit individual supplier accounts in purchases ledger, debit purchases account (with total). For Returns - opposite entries. For Cash Book - post individual items to relevant accounts. The dual aspect ensures every debit has a corresponding credit. Cross-referencing (folio numbers) links journals and ledgers for audit trail.",
              keyPoints: [
                "Posting: transferring from journals to ledger accounts",
                "Sales journal posting: Dr. Individual debtors, Cr. Sales (total)",
                "Purchases journal: Cr. Individual creditors, Dr. Purchases (total)",
                "Sales returns: Dr. Sales returns, Cr. Individual debtors",
                "Purchases returns: Cr. Purchases returns, Dr. Individual creditors",
                "Cash book receipts: Dr. Cash/Bank, Cr. Source account",
                "Cash book payments: Dr. Expense/account, Cr. Cash/Bank",
                "Post individual items, not just totals (except day book totals)",
                "Folio/reference numbers for cross-referencing",
                "SL (sales ledger), PL (purchases ledger), GL (general ledger)",
                "Date in ledger same as transaction date",
                "Particulars/details describe the transaction",
                "Maintain chronological order within accounts"
              ]
            },
            {
              title: "Balancing Ledger Accounts",
              content: "Balancing is the process of calculating the difference between the debit and credit sides of an account at the end of a period. Steps: Add up both debit and credit sides, insert the smaller total on the larger side as 'Balance c/d' (carried down) to make sides equal, total both sides showing equal amounts, bring down the balance to start next period as 'Balance b/d' (brought down) on the opposite side. Debit balances represent assets and expenses; credit balances represent liabilities, capital, and income. Not all accounts are balanced - some just closed to profit and loss.",
              keyPoints: [
                "Balancing: finding difference between debit and credit totals",
                "Purpose: determine closing balance at period end",
                "Steps: total both sides, insert balance c/d on smaller side",
                "Write equal totals on both sides",
                "Balance c/d: balance carried down to next period",
                "Balance b/d: balance brought down (opens next period on opposite side)",
                "Debit balance: assets (cash, debtors, equipment) and expenses",
                "Credit balance: liabilities (creditors, loans), capital, income",
                "Asset and liability accounts: balances carried forward",
                "Income and expense accounts: closed to profit and loss (not balanced)",
                "Trial balance uses these closing balances",
                "Balancing done periodically (monthly, yearly)"
              ]
            }
          ],
          objectives: [
            "Describe the structure of ledger accounts",
            "Explain the classification of ledgers",
            "Demonstrate posting from journals to ledgers",
            "Balance ledger accounts correctly",
            "Distinguish between debit and credit balances"
          ]
        },
        {
          title: "Trial Balance",
          subtopics: [
            {
              title: "Purpose and Preparation of Trial Balance",
              content: "A Trial Balance is a statement listing all ledger account balances at a particular date. It has two columns: Debit and Credit. Each account's balance is entered in the appropriate column. The trial balance serves to: check arithmetical accuracy of bookkeeping (debits should equal credits), provide a summary of all accounts, serve as basis for preparing financial statements. It is prepared by extracting balances from all ledger accounts after balancing. If total debits equal total credits, the trial balance 'agrees', indicating (but not guaranteeing) accuracy.",
              keyPoints: [
                "Trial balance: list of all ledger balances at a date",
                "Two columns: Debit and Credit",
                "Purpose: check arithmetical accuracy (double entry maintained)",
                "Summary of all accounts in one statement",
                "Basis for preparing financial statements",
                "Preparation: extract all account balances from ledger",
                "Enter debit balances in debit column",
                "Enter credit balances in credit column",
                "Total both columns - should be equal",
                "If equal: trial balance agrees (bookkeeping likely accurate)",
                "Assets and expenses: debit side",
                "Liabilities, capital, and income: credit side",
                "Not a financial statement - internal working document",
                "Agreement doesn't guarantee 100% accuracy (some errors not revealed)"
              ]
            },
            {
              title: "Errors Not Revealed by Trial Balance",
              content: "Even when a trial balance agrees, certain errors may still exist: Errors of Omission (transaction completely omitted from books - both debit and credit), Errors of Commission (correct amount but wrong account of same type - e.g., debiting wrong debtor), Errors of Principle (correct amount but wrong type of account - e.g., treating capital expenditure as revenue), Errors of Original Entry (wrong amount in both debit and credit from source), Complete Reversal of Entries (debit and credit reversed but equal), and Compensating Errors (errors that cancel each other out). These don't affect trial balance agreement but distort financial statements.",
              keyPoints: [
                "Agreement of trial balance doesn't guarantee complete accuracy",
                "Errors not affecting trial balance:",
                "1. Error of omission: transaction completely left out (both Dr and Cr missing)",
                "2. Error of commission: posted to wrong account of same class",
                "Example: payment to Supplier A posted to Supplier B",
                "3. Error of principle: posted to wrong type of account",
                "Example: capital expenditure treated as expense",
                "4. Error of original entry: wrong amount in both debit and credit",
                "Example: Invoice of 500 recorded as 5,000 in both entries",
                "5. Complete reversal: debit and credit entries swapped",
                "6. Compensating errors: errors that offset each other",
                "Example: overcast of 100 in one account, undercast of 100 in another",
                "These errors distort financial statements despite balanced trial balance",
                "Regular checks, reconciliations, and audits needed"
              ]
            },
            {
              title: "Correction of Errors",
              content: "When errors are discovered, they must be corrected. If trial balance doesn't agree, the difference is temporarily placed in a Suspense Account until errors are found. Corrections are made through journal entries in the General Journal. For errors not affecting trial balance: reverse the wrong entry and make the correct entry (or net effect in one journal entry). For errors affecting trial balance: correct by adjusting the suspense account and the affected account. After all corrections, suspense account should close (zero balance) and trial balance should agree. All corrections must be properly documented.",
              keyPoints: [
                "When trial balance doesn't agree: open Suspense Account for difference",
                "Suspense account: temporary account while investigating errors",
                "Corrections made through General Journal entries",
                "Errors NOT affecting trial balance: correct without suspense account",
                "Make reversing entry and correct entry (or net correction)",
                "Errors affecting trial balance: correct using suspense account",
                "Example: if debit omitted, debit the account and credit suspense",
                "After corrections, suspense account balance should be zero",
                "Document corrections: date, details, amounts, authorization",
                "Some errors found through: bank reconciliation, debtor/creditor confirmations",
                "Prevention better than correction: careful recording, regular checks",
                "Internal controls reduce errors"
              ]
            }
          ],
          objectives: [
            "Explain the purpose of a trial balance",
            "Prepare a trial balance from ledger balances",
            "Identify errors revealed and not revealed by trial balance",
            "Correct errors using journal entries",
            "Understand the role of suspense account"
          ]
        }
      ]
    }
  },
  {
    id: "acc-3",
    subjectId: "accounting",
    title: "Final Accounts - Trading and Profit & Loss Account",
    order: 3,
    content: {
      overview: "Final accounts are financial statements prepared at the end of an accounting period to show the financial performance and position of a business. They consist of the Trading Account, Profit and Loss Account, and Balance Sheet.",
      topics: [
        {
          title: "Trading Account",
          subtopics: [
            {
              title: "Purpose and Format of Trading Account",
              content: "The Trading Account is prepared to determine the Gross Profit or Gross Loss from buying and selling activities. It shows the direct costs of trading. Format: Debit side includes Opening Stock, Purchases, Purchases Returns (deducted), Carriage Inwards, and Direct Expenses. Credit side includes Sales, Sales Returns (deducted), and Closing Stock. The difference (balancing figure) is Gross Profit (if credit exceeds debit) or Gross Loss (if debit exceeds credit). Gross Profit is transferred to the Profit and Loss Account.",
              keyPoints: [
                "Trading account: shows result of buying and selling",
                "Determines Gross Profit or Gross Loss",
                "Covers only trading/direct costs",
                "Debit side (Expenditure): Opening stock, Purchases (less returns), Direct expenses",
                "Carriage inwards: transport cost on purchases",
                "Direct expenses: wages of production workers, factory expenses",
                "Credit side (Income): Sales (less returns), Closing stock",
                "Closing stock: value of unsold goods at year-end (asset)",
                "Appears on credit side of trading account and as asset in balance sheet",
                "Becomes next period's opening stock",
                "Cost of Goods Sold (COGS) = Opening Stock + Purchases - Closing Stock",
                "Gross Profit = Sales - Cost of Goods Sold",
                "Gross Profit Margin = (Gross Profit / Sales) × 100%",
                "Transferred to Profit and Loss Account"
              ]
            },
            {
              title: "Adjustments in Trading Account",
              content: "Several adjustments may be needed in the Trading Account: Closing Stock must be valued (usually at lower of cost or net realizable value), Returns Inward (Sales Returns) deducted from sales, Returns Outward (Purchases Returns) deducted from purchases, Carriage Inwards added to purchases as part of cost of goods, Discounts Allowed (to customers) and Discounts Received (from suppliers) typically go to Profit and Loss, not Trading Account. Accurate valuation and adjustments ensure correct gross profit calculation.",
              keyPoints: [
                "Closing stock: valued at lower of cost or market value",
                "Conservative approach (prudence concept)",
                "Damaged/obsolete stock: reduce value",
                "Sales returns (returns inward): deduct from sales",
                "Reduces revenue as goods returned",
                "Purchases returns (returns outward): deduct from purchases",
                "Reduces cost of goods as sent back to supplier",
                "Carriage inwards: add to purchases (part of cost)",
                "Carriage outwards: not in trading account (delivery expense in P&L)",
                "Discounts: trade discounts deducted before recording",
                "Cash discounts in Profit and Loss, not Trading",
                "Drawings of goods: reduce purchases or increase sales",
                "Adjustments ensure accurate gross profit"
              ]
            }
          ],
          objectives: [
            "Explain the purpose of the Trading Account",
            "Prepare a Trading Account",
            "Calculate Cost of Goods Sold and Gross Profit",
            "Apply adjustments correctly in Trading Account",
            "Interpret Gross Profit and Gross Profit Margin"
          ]
        },
        {
          title: "Profit and Loss Account",
          subtopics: [
            {
              title: "Purpose and Format of Profit and Loss Account",
              content: "The Profit and Loss Account determines the Net Profit or Net Loss by considering all revenues and expenses (both direct and indirect). Debit side includes: Gross Profit (brought down from Trading Account), all operating income (rent received, commission received, discount received). Credit side includes: all operating expenses (salaries, rent, rates, insurance, depreciation, bad debts, advertising, discount allowed, carriage outwards, etc.) and Gross Loss if any. The balancing figure is Net Profit (if income exceeds expenses) or Net Loss (if expenses exceed income). Net Profit is added to Capital in the Balance Sheet.",
              keyPoints: [
                "Profit and Loss Account: determines Net Profit or Net Loss",
                "Considers all revenues and expenses",
                "Debit side: Gross Profit (from Trading), other incomes",
                "Other incomes: rent received, commission received, discount received, interest received",
                "Credit side: all operating/indirect expenses",
                "Expenses: salaries, wages (indirect), rent, rates, insurance",
                "Advertising, bad debts, depreciation, repairs",
                "Discount allowed, carriage outwards, stationery, lighting",
                "Net Profit: when income exceeds expenses (credit balance)",
                "Net Loss: when expenses exceed income (debit balance)",
                "Net Profit transferred to Capital Account (increases owner's equity)",
                "Net Loss reduces capital",
                "Net Profit Margin = (Net Profit / Sales) × 100%",
                "Shows overall profitability after all costs"
              ]
            },
            {
              title: "Adjustments in Profit and Loss Account",
              content: "Various adjustments are made for accruals and prepayments to match expenses and revenues to the correct period (matching and accruals concepts). Accrued Expenses (expenses incurred but not yet paid) are added to the expense, appearing as current liability in Balance Sheet. Prepaid Expenses (paid in advance) are deducted from expense, appearing as current asset. Accrued Income (earned but not received) added to income, shown as asset. Prepaid Income (received in advance) deducted from income, shown as liability. Depreciation is charged to account for asset wear and tear. Bad debts written off, provision for doubtful debts may be created.",
              keyPoints: [
                "Accrued expenses: incurred but not yet paid",
                "Add to expense in P&L, show as current liability in Balance Sheet",
                "Example: rent owing, wages owed",
                "Prepaid expenses: paid in advance for next period",
                "Deduct from expense in P&L, show as current asset",
                "Example: insurance prepaid, rent paid in advance",
                "Accrued income: earned but not yet received",
                "Add to income in P&L, show as current asset (debtor)",
                "Prepaid income (income received in advance): liability",
                "Deduct from income in P&L, show as current liability",
                "Example: rent received in advance for next period",
                "Depreciation: systematic allocation of asset cost over useful life",
                "Bad debts: debts confirmed as uncollectible, written off as expense",
                "Provision for doubtful debts: estimated future bad debts",
                "These adjustments ensure matching of revenues and expenses"
              ]
            },
            {
              title: "Comprehensive Income Statement",
              content: "The Trading and Profit & Loss Accounts are often combined into a single Comprehensive Income Statement. Format shows: Sales revenue less Cost of Sales (from Trading Account section) equals Gross Profit, then less Operating Expenses (from P&L section) equals Net Profit before tax, less tax equals Net Profit after tax. Additional sections may show Other Comprehensive Income. This format is commonly used in modern financial reporting and provides clear progression from revenue to final profit, useful for analysis.",
              keyPoints: [
                "Comprehensive income statement: combines Trading and P&L",
                "Modern format used in financial reporting",
                "Structure: Sales Revenue (less sales returns)",
                "Less: Cost of Sales (Opening stock + Purchases - Closing stock)",
                "Equals: Gross Profit",
                "Add: Other Operating Income",
                "Less: Operating Expenses (all indirect expenses)",
                "Equals: Operating Profit (or Net Profit before tax)",
                "Less: Tax",
                "Equals: Net Profit After Tax",
                "May include: Other Comprehensive Income section",
                "Clearer presentation for users",
                "Facilitates ratio analysis",
                "Shows profit at different stages: gross, operating, net"
              ]
            }
          ],
          objectives: [
            "Explain the purpose of Profit and Loss Account",
            "Prepare a Profit and Loss Account",
            "Calculate Net Profit or Net Loss",
            "Apply adjustments for accruals and prepayments",
            "Prepare a comprehensive income statement"
          ]
        }
      ]
    }
  },
  {
    id: "acc-4",
    subjectId: "accounting",
    title: "Balance Sheet and Financial Position",
    order: 4,
    content: {
      overview: "The Balance Sheet is a statement of financial position showing assets, liabilities, and capital at a specific date. It provides a snapshot of what the business owns and owes.",
      topics: [
        {
          title: "The Balance Sheet",
          subtopics: [
            {
              title: "Purpose and Format of Balance Sheet",
              content: "The Balance Sheet is a statement showing the financial position of a business at a particular date (not for a period). It lists all Assets (what the business owns) and Liabilities (what the business owes), with Capital representing the owner's interest. Format can be: Traditional (two-sided: Assets on left, Capital and Liabilities on right) or Vertical (assets minus liabilities equals net assets/capital employed). Both formats must balance according to: Assets = Capital + Liabilities. The Balance Sheet is prepared from the Trial Balance after Trading and Profit & Loss Accounts are completed.",
              keyPoints: [
                "Balance Sheet: statement of financial position at a specific date",
                "Shows what business owns (assets) and owes (liabilities)",
                "Not a statement for a period - snapshot at one moment",
                "Prepared after Trading and P&L accounts",
                "Traditional format: two sides",
                "Left: Assets (Fixed and Current)",
                "Right: Capital and Liabilities (Long-term and Current)",
                "Vertical format: Assets - Liabilities = Net Assets = Capital Employed",
                "More modern and easier to analyze",
                "Must balance: Assets = Capital + Liabilities",
                "Rearranged: Assets - Liabilities = Capital",
                "Shows financial health and solvency",
                "Used by investors, creditors, management for decisions"
              ]
            },
            {
              title: "Classification of Assets",
              content: "Assets are classified into Fixed Assets and Current Assets. Fixed Assets (Non-current) are held for long-term use in business, not for resale, including: Land and Buildings, Machinery and Equipment, Motor Vehicles, Furniture and Fittings, Intangible Assets (goodwill, patents). Shown at cost less accumulated depreciation. Current Assets are held short-term, expected to be converted to cash within one year: Stock/Inventory, Debtors/Accounts Receivable, Prepayments, Cash at Bank, Cash in Hand. Listed in order of liquidity (least to most liquid) or reverse.",
              keyPoints: [
                "Fixed Assets (Non-current): long-term use, not for resale",
                "Types: Land and Buildings, Plant and Machinery",
                "Motor Vehicles, Furniture and Fittings, Equipment",
                "Intangible assets: Goodwill, Patents, Trademarks",
                "Shown at: Cost less Accumulated Depreciation = Net Book Value",
                "Depreciation: systematic allocation of cost over useful life",
                "Current Assets: short-term, convertible to cash within a year",
                "Types: Stock/Inventory (closing stock)",
                "Debtors/Trade Receivables (customers owe)",
                "Prepayments (expenses paid in advance)",
                "Bank balance, Cash in hand",
                "Listed in order of liquidity: Stock → Debtors → Bank → Cash",
                "Or reverse order (most liquid first)",
                "Current assets finance day-to-day operations"
              ]
            },
            {
              title: "Classification of Liabilities and Capital",
              content: "Capital represents owner's investment and retained profits: Opening Capital + Net Profit (or - Net Loss) + Additional Capital - Drawings = Closing Capital. Long-term Liabilities (Non-current) are due after one year: Long-term Loans, Mortgages, Debentures. Current Liabilities are due within one year: Creditors/Trade Payables (suppliers), Bank Overdraft, Accrued Expenses, Short-term Loans. Working Capital = Current Assets - Current Liabilities. The Balance Sheet equation can be presented as: Fixed Assets + Current Assets = Capital + Long-term Liabilities + Current Liabilities.",
              keyPoints: [
                "Capital: owner's equity in the business",
                "Components: Opening Capital + Additional Capital + Net Profit - Drawings - Net Loss",
                "Drawings: money/goods taken by owner for personal use",
                "Reduces capital",
                "Long-term Liabilities (Non-current): due after one year",
                "Examples: Long-term bank loans, Mortgages, Debentures, Bonds",
                "Current Liabilities: due within one year",
                "Examples: Creditors/Trade Payables (owe suppliers)",
                "Bank Overdraft, Short-term loans",
                "Accrued expenses (owe for services received)",
                "Income received in advance",
                "Working Capital = Current Assets - Current Liabilities",
                "Measures short-term financial health",
                "Positive working capital: can meet short-term obligations",
                "Balance Sheet balances: Assets = Capital + Liabilities"
              ]
            },
            {
              title: "Vertical Format Balance Sheet",
              content: "The vertical format is increasingly preferred as it's easier to read and analyze. Structure: Fixed Assets at cost, less accumulated depreciation, equals net book value. Plus Current Assets, Less Current Liabilities, Equals Net Current Assets (Working Capital). Total Net Assets equals Capital Employed. Then show how financed: Capital (opening + profit - drawings), plus Long-term Liabilities, equals Capital Employed. This format clearly shows working capital and capital employed, facilitating financial analysis and ratio calculations.",
              keyPoints: [
                "Vertical format: top to bottom presentation",
                "Section 1: Fixed Assets",
                "Cost, less Accumulated Depreciation, equals Net Book Value",
                "Section 2: Current Assets (listed)",
                "Section 3: Less Current Liabilities",
                "Equals: Net Current Assets (Working Capital)",
                "Fixed Assets + Net Current Assets = Net Assets",
                "Section 4: Financed by:",
                "Capital: Opening + Profit - Drawings = Closing",
                "Long-term Liabilities",
                "Total = Net Assets (or Capital Employed)",
                "Advantages: clearer, shows working capital prominently",
                "Easier to calculate ratios",
                "Preferred in modern accounting",
                "Both formats give same information, different presentation"
              ]
            }
          ],
          objectives: [
            "Explain the purpose of a Balance Sheet",
            "Classify assets into fixed and current",
            "Classify liabilities into long-term and current",
            "Calculate working capital and capital employed",
            "Prepare a Balance Sheet in both traditional and vertical formats"
          ]
        },
        {
          title: "Depreciation of Fixed Assets",
          subtopics: [
            {
              title: "Concept and Methods of Depreciation",
              content: "Depreciation is the systematic allocation of the cost of a fixed asset over its useful life due to wear and tear, obsolescence, or passage of time. It's an expense, not a cash outflow. Main methods: Straight Line Method (equal amount each year = (Cost - Residual Value) / Useful Life), Reducing Balance Method (constant percentage on reducing book value each year), Units of Production (based on usage), and Revaluation Method (for small tools - depreciation = opening value + purchases - closing value). Accumulated depreciation is shown as deduction from asset cost in Balance Sheet.",
              keyPoints: [
                "Depreciation: allocation of asset cost over useful life",
                "Reasons: wear and tear, obsolescence, time passage",
                "Non-cash expense (no money paid out)",
                "Matches asset cost to periods benefiting from its use",
                "Straight Line Method: equal amount each year",
                "Formula: (Cost - Residual Value) / Useful Life years",
                "Simple, easy to calculate, suitable for buildings",
                "Reducing/Diminishing Balance Method: fixed percentage on book value",
                "Formula: Depreciation = Book Value × Rate%",
                "Higher depreciation in early years, decreases over time",
                "Suitable for vehicles, machinery (high early maintenance costs)",
                "Revaluation method: for small tools, livestock",
                "Depreciation = Opening + Purchases - Closing value",
                "Accumulated depreciation: total depreciation to date",
                "Shown as deduction from asset cost in Balance Sheet",
                "Depreciation expense in Profit and Loss Account"
              ]
            },
            {
              title: "Disposal of Fixed Assets",
              content: "When a fixed asset is sold or scrapped, its disposal must be properly recorded. Create a Disposal Account (or Asset Disposal Account). Debit: Original cost of asset from Asset Account, Loss on disposal (if any). Credit: Accumulated depreciation, Sale proceeds (cash received), Profit on disposal (if any). Any difference between net book value (cost minus accumulated depreciation) and sale proceeds is profit or loss on disposal, transferred to Profit and Loss Account. This ensures proper recording and identifies gain or loss on disposal.",
              keyPoints: [
                "Disposal: when asset sold, scrapped, or discarded",
                "Create Disposal Account (or Asset Disposal Account)",
                "Transfer asset cost: Cr. Asset Account, Dr. Disposal Account",
                "Transfer accumulated depreciation: Dr. Accumulated Depreciation, Cr. Disposal",
                "Record sale proceeds: Dr. Cash/Bank, Cr. Disposal",
                "Calculate: Net Book Value = Cost - Accumulated Depreciation",
                "Profit on disposal: Sale Price > Net Book Value (credit balance)",
                "Loss on disposal: Sale Price < Net Book Value (debit balance)",
                "Transfer profit/loss to Profit and Loss Account",
                "Part exchange: treat trade-in value as sale proceeds",
                "Depreciation charged up to disposal date",
                "Proper recording ensures accurate profit/loss",
                "Disposal account closes to zero after transfer to P&L"
              ]
            }
          ],
          objectives: [
            "Explain the concept and purpose of depreciation",
            "Calculate depreciation using different methods",
            "Account for accumulated depreciation",
            "Record disposal of fixed assets",
            "Calculate profit or loss on disposal"
          ]
        }
      ]
    }
  },
  {
    id: "acc-5",
    subjectId: "accounting",
    title: "Accounting Ratios and Analysis",
    order: 5,
    content: {
      overview: "Financial ratios are tools for analyzing financial statements to assess business performance, profitability, liquidity, and efficiency. They facilitate comparison over time and between businesses.",
      topics: [
        {
          title: "Profitability Ratios",
          subtopics: [
            {
              title: "Gross Profit Margin and Net Profit Margin",
              content: "Profitability ratios measure the ability of a business to generate profit. Gross Profit Margin = (Gross Profit / Sales) × 100% - shows percentage of sales remaining after direct costs; higher is better; indicates pricing policy and cost control. Net Profit Margin = (Net Profit / Sales) × 100% - shows percentage of sales remaining after all costs; measures overall profitability and cost management. Comparing over time reveals trends. Comparing with industry averages shows competitiveness. Decline may indicate rising costs, falling prices, or inefficiency.",
              keyPoints: [
                "Profitability ratios: measure profit generation",
                "Gross Profit Margin = (Gross Profit / Sales) × 100%",
                "Shows profit after direct trading costs",
                "Indicates: pricing policy, cost of sales control",
                "Higher margin better (more profit per sale)",
                "Typical range varies by industry",
                "Net Profit Margin = (Net Profit / Sales) × 100%",
                "Shows profit after all expenses",
                "Measures overall cost management",
                "Lower than gross margin due to operating expenses",
                "Interpretation: compare over time (trend analysis)",
                "Compare with competitors (inter-firm comparison)",
                "Improving margins: increase prices, reduce costs, improve efficiency",
                "Declining margins: investigate cost increases or price pressures"
              ]
            },
            {
              title: "Return on Capital Employed (ROCE)",
              content: "Return on Capital Employed (ROCE) measures how efficiently a business uses its capital to generate profit. ROCE = (Net Profit / Capital Employed) × 100%, where Capital Employed can be calculated as: Capital + Long-term Liabilities, or Fixed Assets + Working Capital. It shows the return earned on total long-term funds invested in the business. Higher ROCE is better, indicating efficient use of capital. Compare with bank interest rates - should exceed these for worthwhile business operation. Compare over time and with industry averages. Low ROCE suggests inefficient capital use or insufficient profitability.",
              keyPoints: [
                "ROCE: Return on Capital Employed",
                "Formula: (Net Profit / Capital Employed) × 100%",
                "Capital Employed = Capital + Long-term Liabilities",
                "Or: Fixed Assets + Working Capital",
                "Shows return on long-term investment in business",
                "Measures efficiency in using capital",
                "Higher ROCE better - more profit per unit of capital",
                "Should exceed bank interest rates (opportunity cost)",
                "Compare over years: improving ROCE shows better capital use",
                "Compare with industry: competitive performance",
                "Improving ROCE: increase profit (higher sales, lower costs)",
                "Or reduce capital employed (dispose unused assets)",
                "Low ROCE: inefficient operations or excess capital",
                "Important for investors deciding where to invest"
              ]
            },
            {
              title: "Return on Assets (ROA)",
              content: "Return on Assets (ROA) measures how effectively a business uses its assets to generate profit. ROA = (Net Profit / Total Assets) × 100%. Shows profit generated per unit of assets. Similar to ROCE but uses total assets as denominator. Useful for comparing businesses of different sizes. Higher ROA indicates more efficient asset utilization. Can be improved by increasing profits or by disposing of unnecessary assets. Asset-intensive industries typically have lower ROA than service industries. Important for assessing management's efficiency in deploying assets.",
              keyPoints: [
                "ROA: Return on Assets",
                "Formula: (Net Profit / Total Assets) × 100%",
                "Total Assets = Fixed Assets + Current Assets",
                "Shows profit generated per unit of assets",
                "Measures asset efficiency",
                "Higher ROA better: more profit from available assets",
                "Compare across time and competitors",
                "Asset-intensive businesses (manufacturing) have lower ROA",
                "Service businesses typically higher ROA (fewer assets)",
                "Improving ROA: increase profit or reduce/optimize assets",
                "Low ROA: underutilized assets or low profitability",
                "Management efficiency indicator",
                "Different from ROCE which considers financing method"
              ]
            }
          ],
          objectives: [
            "Define and calculate profitability ratios",
            "Interpret gross and net profit margins",
            "Calculate and interpret ROCE and ROA",
            "Compare profitability across periods and businesses",
            "Identify factors affecting profitability"
          ]
        },
        {
          title: "Liquidity and Efficiency Ratios",
          subtopics: [
            {
              title: "Current Ratio and Acid Test Ratio",
              content: "Liquidity ratios measure ability to meet short-term obligations. Current Ratio = Current Assets / Current Liabilities - shows whether business can pay current liabilities from current assets; ideal range 1.5:1 to 2:1; below 1:1 indicates liquidity problems. Acid Test (Quick) Ratio = (Current Assets - Stock) / Current Liabilities - more stringent test excluding stock (less liquid); ideal around 1:1; shows immediate liquidity. Very high ratios may indicate excess idle resources. Very low ratios suggest potential cash flow problems and inability to pay debts.",
              keyPoints: [
                "Liquidity ratios: measure ability to pay short-term debts",
                "Current Ratio = Current Assets / Current Liabilities",
                "Expressed as ratio (e.g., 2:1 or just 2)",
                "Shows how many times CA covers CL",
                "Ideal: 1.5:1 to 2:1 (varies by industry)",
                "Below 1:1: liquidity crisis, may not pay debts",
                "Too high: excess idle cash, inefficiency",
                "Acid Test (Quick) Ratio = (CA - Stock) / CL",
                "More stringent: excludes stock (takes time to sell)",
                "Ideal: around 1:1",
                "Includes only most liquid assets (debtors, bank, cash)",
                "Better indicator of immediate liquidity",
                "Working Capital = CA - CL (absolute measure)",
                "Improving liquidity: increase CA, reduce CL, manage stock/debtors",
                "Important for creditors assessing credit risk"
              ]
            },
            {
              title: "Stock Turnover and Debtor/Creditor Days",
              content: "Efficiency ratios measure how well business manages resources. Stock Turnover = Cost of Sales / Average Stock - shows how many times stock sold and replaced annually; higher indicates faster movement, less capital tied up. Debtor Collection Period = (Debtors / Credit Sales) × 365 days - shows average days to collect from customers; shorter is better; compare with credit terms given. Creditor Payment Period = (Creditors / Credit Purchases) × 365 days - shows average days to pay suppliers; longer suggests better cash flow but may strain supplier relations. These ratios help manage working capital efficiently.",
              keyPoints: [
                "Efficiency ratios: measure resource management",
                "Stock Turnover Ratio = Cost of Sales / Average Stock",
                "Average Stock = (Opening Stock + Closing Stock) / 2",
                "Shows times stock sold and replaced per year",
                "Higher turnover better: faster movement, less capital tied",
                "Low turnover: slow-moving stock, risk of obsolescence",
                "Varies by industry: groceries high, jewelry low",
                "Debtor Collection Period = (Debtors / Credit Sales) × 365",
                "Shows average days to collect from customers",
                "Shorter better: faster cash collection",
                "Compare with credit terms (e.g., 30 days)",
                "Long period: poor credit control, cash flow problems",
                "Creditor Payment Period = (Creditors / Credit Purchases) × 365",
                "Shows average days to pay suppliers",
                "Longer period: retains cash longer, but may damage relations",
                "Should not exceed credit terms to avoid penalties"
              ]
            }
          ],
          objectives: [
            "Define and calculate liquidity ratios",
            "Interpret current and acid test ratios",
            "Calculate and interpret efficiency ratios",
            "Analyze stock turnover and collection periods",
            "Recommend improvements to liquidity and efficiency"
          ]
        },
        {
          title: "Limitations of Ratio Analysis",
          subtopics: [
            {
              title: "Limitations and Considerations",
              content: "While ratios are useful, they have limitations: Based on historical data (past performance, not future), Different accounting policies affect comparability (e.g., depreciation methods), Window dressing (manipulating figures to look better), Inflation distorts comparisons over time, Ratios are quantitative (ignore qualitative factors like management quality, employee morale, market trends), Industry differences make comparison difficult, Single ratios can mislead (need multiple ratios), and External factors (economic conditions) not reflected. Use ratios as indicators, not definitive answers. Combine with other analysis methods for comprehensive evaluation.",
              keyPoints: [
                "Limitations of ratio analysis:",
                "1. Historical: based on past data, not predictive",
                "Future may differ from past",
                "2. Different accounting policies reduce comparability",
                "Depreciation methods, stock valuation affect ratios",
                "3. Window dressing: manipulating figures to look better",
                "Temporary actions before year-end",
                "4. Inflation: distorts comparisons over time",
                "Historical cost doesn't reflect current values",
                "5. Quantitative only: ignores qualitative factors",
                "Management quality, employee morale, brand strength not captured",
                "6. Industry differences: different norms",
                "7. Single ratio misleading: need comprehensive analysis",
                "8. External factors: economy, competition not in ratios",
                "9. Seasonal businesses: ratios vary by season",
                "Use ratios with other information: trends, budgets, non-financial data",
                "Ratios are tools, not complete answers"
              ]
            }
          ],
          objectives: [
            "Identify limitations of ratio analysis",
            "Explain how accounting policies affect ratios",
            "Discuss the impact of window dressing",
            "Recognize qualitative factors not captured by ratios",
            "Use ratios appropriately in financial analysis"
          ]
        }
      ]
    }
  }
];
