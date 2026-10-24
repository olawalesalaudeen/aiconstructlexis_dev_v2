# Numerical ability
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Numerical proficiency, Numeracy, Arithmetic capability, Numeric precision sensitivity  

## State of the Field

**Definition agreement:** Complementary. Most papers define numerical ability as a model's capacity to perform arithmetic or other numerical computations accurately, while a few papers broaden it to accurately interpreting and reporting quantitative information or responding precisely to small numeric differences in the input. These definitions all treat it as a model capability for handling numerical information, but they emphasize different aspects and scopes rather than stating one identical core definition.

**Space of definitions.** Across papers, the prevailing usage treats numerical ability as a model capacity for numerical tasks and arithmetic operations. Most definitions describe handling numerical data through recognition, counting, and basic arithmetic, or more generally the latent ability to perform calculations such as addition, subtraction, and multiplication; one paper also says gains in numeracy extend to other multi-step reasoning tasks including sorting and multiplication. Smaller lines of work narrow the concept to correctly interpreting, processing, and reporting quantitative information from scientific sources, or to detecting and responding accurately to small differences in numeric input specifications under strict tolerance conditions.

**Space of facets.** Papers break the construct into a few recurring facets rather than a single shared taxonomy. One framing spells it out as recognition, counting, and basic arithmetic; others exemplify arithmetic capability with addition, subtraction, multiplication, and, in one paper, more complex operations. The naming overlaps: numerical ability, numerical proficiency, numeracy, and arithmetic capability are used for general capacities around numerical tasks and arithmetic operations, while numeric precision sensitivity is presented as a narrower aspect focused on small numeric differences; in one paper, numerical proficiency appears alongside domain knowledge, long-range context understanding, and cause-and-effect reasoning in scientific question answering.

**Space of measurement.** No measurement instrument is linked to this construct, and no benchmark, human evaluation, LLM-as-a-judge, probe, or analysis is recorded as measuring it. Papers link it to one behavioral indicator, Scientific question answering, but that link is recorded as related rather than measured_by. Elsewhere, papers describe the construct through performance on recognition, counting, basic arithmetic, addition, subtraction, multiplication, more complex arithmetic operations, and behavior under strict tolerance conditions.

**Links.** Only one paper relates numerical ability to a behavioral indicator: Scientific question answering. In that paper, scientific question answering is described as requiring numerical proficiency alongside domain knowledge, long-range context understanding, and cause-and-effect reasoning, so the recorded link is a related relationship rather than a causal or correlational one. No papers record a measured_by link, a causal relationship, a correlational relationship, or a link to another construct.

## Sources

**[YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf) (as "Numerical proficiency")**
> The ability to correctly interpret, process, and report quantitative information from scientific sources in generated or evaluated responses.

**[LIFBench: Evaluating the Instruction Following Performance and Stability of Large Language Models in Long-Context Scenarios](https://aclanthology.org/2025.acl-long.803.pdf)**
> The capacity to recognize, count, and perform basic arithmetic operations on numerical data within instructions or context.

**[Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf) (as "Numeracy")**
> The model's general capability regarding numerical tasks and arithmetic operations.

**[Teaching Arithmetic to Small Transformers](https://proceedings.iclr.cc/paper_files/paper/2024/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf) (as "Arithmetic capability")**
> The latent ability of a model to perform mathematical calculations such as addition, subtraction, and multiplication.

**[LaMAGIC2: Advanced Circuit Formulations for Language Model-Based Analog Topology Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25b/chang25b.pdf) (as "Numeric precision sensitivity")**
> The model's ability to detect and respond accurately to small differences in numeric input specifications, such as voltage conversion ratio or efficiency targets.

## Relationships

### Associated with
- **Scientific question answering** (behaviors tasks)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
