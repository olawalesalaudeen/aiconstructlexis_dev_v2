# Financial reasoning
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Financial numerical reasoning, Present value calculation  

## State of the Field

**Definition agreement:** Conflicting. Most papers define financial reasoning as a model's latent ability to solve finance questions through multi-step reasoning and calculation over financial texts, tables, or documents. One paper instead uses the term for a specific valuation task, calculating present value from future cash flows and a discount rate, so the construct shifts from a broad reasoning ability to a particular task and the definitions conflict.

**Space of definitions.** Across the papers, the prevailing usage treats financial reasoning as a latent ability in the financial domain. Most definitions describe solving finance-related questions or carrying out multi-step computations over financial data, with emphasis on reasoning over documents, text and tables, logical inference, and mathematical computation; one definition further specifies generating executable programs to derive correct answers. A smaller line of work uses a narrower, observable-task framing, defining it as present value calculation, namely determining the current worth of future sums or cash flows given a discount rate.

**Space of facets.** Papers mainly break the construct down by the steps involved in the reasoning process rather than by named subtypes. In the financial numerical reasoning framing, it includes fact extraction, logical inference, and mathematical computation, and also integrating information from text and tables, applying domain-specific logic, and generating executable programs. Across definitions, the term therefore covers both broad finance-question reasoning over documents or calculations and the narrower case of present value computation.

**Space of measurement.** Operationalization is sparse: it is linked to 1 measurement instrument and no behavioral indicators. The linked instrument is FinQA, described as a benchmark dataset for numerical reasoning tasks in the financial domain and used to benchmark models on such tasks. This benchmark-based operationalization matches the definitions that frame the construct as finance-domain question solving and multi-step numerical reasoning; among the linked measures, none is identified as a present value calculation task.

## Sources

**[PlanGEN: A Multi-Agent Framework for Generating Planning and Reasoning Trajectories for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1042.pdf)**
> The latent ability to solve finance-related questions that require reasoning over financial documents or calculations.

**[Program of Thoughts for Financial Reasoning: Leveraging Dynamic In-Context Examples and Generative Retrieval](https://aclanthology.org/2025.emnlp-main.1577.pdf) (as "Financial numerical reasoning")**
> The latent ability of a model to perform multi-step computations involving financial data by integrating information from text and tables, applying domain-specific logic, and generating executable programs to derive correct answers.

**[Language Models Trained to do Arithmetic Predict Human Risky and Intertemporal Choice](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3372a60f76e0acce756cb24deead020-Paper-Conference.pdf) (as "Present value calculation")**
> The observable computational task of determining the current worth of a future sum of money or stream of cash flows, given a specified rate of return or discount rate.

## Relationships

### Financial reasoning →
- **FinQA** (measurements) — *measured_by*
  > datasets such as FinQA (Chen et al., 2021b) and ConvFinQA (Chen et al., 2022) have been developed to benchmark deep learning models for such numerical reasoning tasks in the financial domain.
  - [Program of Thoughts for Financial Reasoning: Leveraging Dynamic In-Context Examples and Generative Retrieval](https://aclanthology.org/2025.emnlp-main.1577.pdf)
- **FinanceBench** (measurements) — *measured_by*
  > “FINANCEBENCH tests financial document understanding with complex reasoning over reports.”
  - [Cost-efficient Collaboration between On-device and Cloud Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/narayan25a/narayan25a.pdf)
