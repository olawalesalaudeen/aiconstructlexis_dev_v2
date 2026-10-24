# Syntactic correctness
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Syntax correctness  

## State of the Field

**Definition agreement:** Consensus. All papers define syntactic correctness as whether generated code or queries follow the formal syntax or grammatical rules of the target programming language. The differences are only in setting and operationalization, such as HTML/CSS/JavaScript, SQL, or Verilog, and checks like linter errors or successful compilation.

**Space of definitions.** Across these papers, the prevailing usage treats syntactic correctness as generated code or queries adhering to the grammatical and structural rules of a target programming language and being free of syntax errors. Most definitions frame it as a model ability or capability to produce such outputs, while a smaller variation defines it as the degree to which outputs conform to syntax and avoid linter-detected errors; language-specific descriptions mention HTML, CSS, and JavaScript, SQL clause arrangement and operator usage, and Verilog code that can be successfully compiled.

**Space of facets.** Papers do not divide the construct into named subtypes; instead, they apply the same idea across different programming settings, and one line of work uses the near-synonymous name syntax correctness. Rather than subdividing it, papers mostly contrast it with other properties: semantic accuracy or semantically meaningful code, logical coherence or logical structure, and, in one evaluation, functional accuracy.

**Space of measurement.** No measurement instrument is linked to it. Papers instead operationalize it within 2 behavioral indicators, Code generation and Text-to-SQL, and describe checking whether outputs successfully compile, whether generated code avoids linter-detected errors, and whether SQL queries avoid errors such as missing commas, incorrect JOIN conditions, or misplaced keywords; 1 construct, Cross-programming-language generalization, is also linked to it. These operationalizations make the definitions concrete through compilation success, linter outcomes, and explicit SQL syntax error checks.

**Links.** One paper relates syntactic correctness to Code generation, describing evaluation in terms of syntax correctness and functional accuracy. One paper reports that Cross-programming-language generalization correlates with syntactic correctness, giving syntactic correctness rates in non-Python languages alongside higher rates on Python. One paper claims a causal relationship from Text-to-SQL to syntactic correctness, stating that this ensures generated queries maintain proper SQL structure.

## Sources

**[WebMMU: A Benchmark for Multimodal Multilingual Website Understanding and Code Generation](https://aclanthology.org/2025.emnlp-main.1276.pdf)**
> The ability to generate code that is free of syntax errors and adheres to the rules of the target programming languages like HTML, CSS, and JavaScript.

**[DeepRTL: Bridging Verilog Understanding and Generation with a Unified Representation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9750610639c3e7a849cff746bf60dbd-Paper-Conference.pdf) (as "Syntax correctness")**
> The model's capability to generate Verilog code that adheres to the language's grammatical and structural rules, allowing it to be successfully compiled.

## Relationships

### Associated with
- **Cross-programming-language generalization** (constructs)
  > Interestingly, even though phi-1 and phi-1.5 have not trained on PLs other than Python, they can still achieve an average of 49.1% and 72.0% syntactically correctness rate in other PLs, respectively, compared with 97.0% and 98.7% achieved on Python. It indicates the cross-language generalizability of LLMs. (Section 4.2.1)
  - [CRUXEVAL-X: A Benchmark for Multilingual Code Reasoning, Understanding and Execution](https://aclanthology.org/2025.acl-long.1158.pdf)
- **Text-to-SQL** (behaviors tasks)
  > This ensures that the generated queries maintain both semantic accuracy (correctly capturing user intentions) and syntactic correctness (following proper SQL structure). (Section 1. Introduction)
  - [Structure-Guided Large Language Models for Text-to-SQL Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25k/zhang25k.pdf)
