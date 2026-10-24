# Context faithfulness
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Contextual faithfulness, Context-faithfulness, Sensitivity to contextual knowledge, Knowledge sensitivity, Context fidelity, Source fidelity, Long-context factuality, Context-grounded reasoning, Contextual grounding  

## State of the Field

**Definition agreement:** Consensus. Almost all papers define context faithfulness as a property of a model's generated responses or outputs: they should be grounded in, supported by, and consistent with the provided context or source documents, rather than relying on unsupported, fabricated, or external information. A few papers emphasize specific situations such as conflict with parametric knowledge or long input contexts, but these are just narrower emphases on the same core definition.

**Space of definitions.** Across the surveyed work, the dominant framing treats context faithfulness as a model ability, or sometimes the degree of its responses' alignment, to keep outputs accurate, consistent, and grounded in provided context rather than adding unsupported, irrelevant, or fabricated content. A recurring formulation makes unfaithfulness concrete as responses that contradict the retrieved document or contain material that cannot be verified from it. Many papers further emphasize conflict settings, defining the construct through whether a model follows contextual knowledge when it disagrees with parametric or internal knowledge.

**Space of facets.** Papers use several closely overlapping labels around this usage, including contextual faithfulness, context-faithfulness, sensitivity to contextual knowledge, context fidelity, and source fidelity, along with other labels for long-context, reasoning, and grounding variants. The distinction that appears most often is between external evidence, such as retrieved documents, source documents, long input context, or dialogue history, and the model's own parametric or internal knowledge. Failure is described in similar terms across these variants: hallucinations, contradictions, unverifiable statements, or drift to external information.

**Space of measurement.** Papers link the construct to 4 measurement instruments and 3 behavioral indicators. Operationalizations are mostly benchmark and dataset evaluations, especially FaithEval, NQ-Swap, CounterFact, and MQuAKE, which test whether models rely on provided or counterfactual evidence; other work measures it through editing success and question-answering accuracy with fact edits. These operationalizations largely match the definitions by checking whether generated answers follow the supplied context, often in settings where context and stored knowledge conflict.

**Links.** Papers report 3 linked constructs. A single paper claims a causal relationship from factuality to context faithfulness, stating that factuality enhancement methods can undermine it, and the same paper claims a causal relationship from overconfidence to context faithfulness. Separately, context faithfulness is reported as related to self-verification in dialogue or context-grounded reasoning setups, and commonsense reasoning is reported as related to context faithfulness; no correlational links are reported.

## Sources

**[Improving Contextual Faithfulness of Large Language Models via Retrieval Heads-Induced Optimization](https://aclanthology.org/2025.acl-long.826.pdf) (as "Contextual faithfulness")**
> The latent ability of a model to generate responses that are fully supported by and consistent with the provided contextual information, avoiding hallucinations or unsupported claims.

**[Exploiting Contextual Knowledge inLLMs through𝒱-usable Information based Layer Enhancement](https://aclanthology.org/2025.acl-long.1531.pdf) (as "Context-faithfulness")**
> The latent ability of a model to generate responses that accurately reflect the provided contextual information, especially when it conflicts with the model's parametric knowledge.

**[Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)**
> The ability of a model to accurately ground its generated output in the provided contextual information, avoiding irrelevant or unsupported content.

**[Continuously Steering LLMs Sensitivity to Contextual Knowledge with Proxy Models](https://aclanthology.org/2025.emnlp-main.233.pdf) (as "Sensitivity to contextual knowledge")**
> The degree to which a language model adjusts its output to align with information provided in the context, especially when that information conflicts with its internal knowledge.

**[Improving Context Fidelity via Native Retrieval-Augmented Reasoning](https://aclanthology.org/2025.emnlp-main.1075.pdf) (as "Context fidelity")**
> The degree to which a model's answers remain grounded in and consistent with the provided input context rather than contradicting or fabricating information.

**[Stronger Baselines for Retrieval-Augmented Generation with Long-Context Language Models](https://aclanthology.org/2025.emnlp-main.1656.pdf) (as "Source fidelity")**
> The degree to which a model's outputs accurately reflect and are grounded in the provided source documents, without introducing unsupported information.

**[Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf) (as "Long-context factuality")**
> The degree to which a model's outputs are faithful to the information presented in a long input context, as opposed to generating fabricated content.

**[AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf) (as "Context-grounded reasoning")**
> The ability to generate accurate and coherent answers that are consistent with a provided context, such as a document or dialogue history.

**[CoCoA: Confidence- and Context-Aware Adaptive Decoding for Resolving Knowledge Conflicts in Large Language Models](https://aclanthology.org/2025.emnlp-main.348.pdf) (as "Contextual grounding")**
> The model's capacity to align its output with the evidence present in the external context, particularly when that context contradicts its prior beliefs.

## Relationships

### Context faithfulness →
- **NQ-Swap** (measurements) — *measured_by*
  > we also include two counter-factual QA benchmarks: NQ-Swap and ConfiQA, offering a more challenging and complementary evaluation of a model’s ability to identify and rely on the correct evidence. (Section 3.2)
  - [Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)
- **FaithEval** (measurements) — *measured_by*
  > “we introduce FaithEval, a novel and comprehensive benchmark tailored to evaluate the faithfulness of LLMs in contextual scenarios”
  - [FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)
- **MQuAKE** (measurements) — *measured_by*
  > "We use LLAMA2-7B-CHAT and LLAMA2-13B-CHAT as baseline models to conduct experiments on MQUAKE ... This verifies whether knowledge has been properly edited and effectively demonstrates LLMs’ context-faithfulness."
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **CounterFact** (measurements) — *measured_by*
  > we also conduct experiments on the CounterFact dataset (Meng et al., 2022), where the model must rely on the provided counterfactual context to answer a simple question correctly. The task does not require complex reasoning, making it well-suited for isolating and evaluating the role of context-faithful experts. (Section 3.3)
  - [Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)

### → Context faithfulness
- **Factuality** (constructs) — *causes*
  > current factuality enhancement methods can significantly undermine the context-faithfulness of LLMs. (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Overconfidence** (constructs) — *causes*
  > overconfidence, resulting in a substantial setback for the context-faithfulness of LLMs. (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)

### Associated with
- **Self-verification** (behaviors tasks)
  > Furthermore, AutoMix is designed with a dialogue-related or context-grounded reasoning setup in mind for effective self-verification, which does not include tasks like factual question-answering and commonsense reasoning. (Section 6)
  - [AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf)
- **Knowledge editing** (behaviors tasks)
  > this paper uses the success rate of KE to assess the context-faithfulness of LLMs (Section 2.2)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks)
  > We adopt a multi-hop editing task to measure context-faithfulness of LLMs in Section 4 by evaluating the accuracy of multi-hop question answering with fact edits. (Section 2.2)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
