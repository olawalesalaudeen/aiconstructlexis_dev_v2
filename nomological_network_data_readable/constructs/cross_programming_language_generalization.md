# Cross-programming-language generalization
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Cross-lingual transferability, Cross-language generalization  

## State of the Field

**Definition agreement:** Consensus. All papers define cross-programming-language generalization as a model or software-engineering system transferring knowledge, reasoning, or problem-solving ability learned in one programming language to tasks in other programming languages. The differences are only in wording and emphasis, such as mentioning unseen languages or language-specific codebases, not in the core property being measured.

**Space of definitions.** Across papers, the prevailing usage treats this construct as transfer across programming languages: a model or software-engineering system applies knowledge, skills, reasoning, or problem-solving performance learned in one language to tasks in other, often unseen, languages. Most definitions share that cross-language transfer core. The main difference is scope, because some papers describe a model's learned knowledge or reasoning capabilities, while another frames it as the degree of performance transfer across programming languages and language-specific codebases.

**Space of facets.** Papers use near-synonymous labels for the same idea, including cross-lingual transferability and cross-language generalization or generalizability. They discuss it through source-target language directions, transfer from Python to other languages, and whether systems move beyond Python repositories toward language-agnostic solutions. One paper also discusses it alongside visual problem-solving limitations and non-Python bugs.

**Space of measurement.** No measurement instrument is linked to it, and the only linked behavioral indicator is Knowledge retrieval, but that link is recorded as a causal claim rather than as a measure. In practice, papers operationalize the construct through cross-language performance comparisons, including transfer among different languages, Pass@1 in other languages, syntactic correctness rates in other programming languages, and performance on non-Python bugs. These operationalizations follow the same transfer-across-languages framing used in the definitions.

**Links.** Papers link this construct to three constructs and one behavioral indicator. One paper claims causal relationships from Knowledge retrieval, In-context reasoning, and Language proficiency to cross-programming-language generalization, stating respectively that knowledge retrieval requirements hinder transferability, that knowledge-free reasoning can be nearly perfectly transferred across source-target language directions, and that improving target-language proficiency can alleviate the limitation. Another paper reports that cross-programming-language generalization is correlated with Syntactic correctness, citing syntactic correctness achieved in other programming languages by models trained only on Python as evidence of cross-language generalizability.

## Sources

**[McEval: Massively Multilingual Code Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/dad66bb085bab14fbca07cfa4271f00b-Paper-Conference.pdf) (as "Cross-lingual transferability")**
> The model's ability to apply knowledge and skills learned from one programming language to tasks in another programming language.

**[SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://proceedings.iclr.cc/paper_files/paper/2025/file/07d6332ae36730707fddddba736d7b6c-Paper-Conference.pdf) (as "Cross-language generalization")**
> The degree to which a software-engineering system transfers its problem-solving performance across programming languages and language-specific codebases.

## Relationships

### Associated with
- **Syntactic correctness** (constructs)
  > Interestingly, even though phi-1 and phi-1.5 have not trained on PLs other than Python, they can still achieve an average of 49.1% and 72.0% syntactically correctness rate in other PLs, respectively, compared with 97.0% and 98.7% achieved on Python. It indicates the cross-language generalizability of LLMs. (Section 4.2.1)
  - [CRUXEVAL-X: A Benchmark for Multilingual Code Reasoning, Understanding and Execution](https://aclanthology.org/2025.acl-long.1158.pdf)
