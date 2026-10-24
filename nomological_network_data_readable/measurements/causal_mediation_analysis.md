# Causal mediation analysis
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Causal Mediation Analysis  

## State of the Field

Across the surveyed literature, Causal Mediation Analysis (CMA) is most commonly defined as a statistical method used to identify and quantify the causal role of specific model components, such as attention heads, in mediating the relationship between an input and an output. The method is frequently operationalized as a "patching-based analysis" where, as one paper notes, "embeddings from one context are patched into another context" (Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models). This interventionist approach of substituting activations is used to estimate the causal effect of a component on the model's behavior. Researchers employ this technique to "distill the information flow during ICL" (Function Vectors in Large Language Models) and to "empirically verify... properties of the binding ID mechanism" (How do Language Models Bind Entities in Context?). A less frequent framing describes it as a procedure for decomposing input effects into direct and indirect components to assess reliance on surface versus deep structure. As a measurement tool, CMA is used to assess constructs like `Abstract reasoning`. For example, it is applied to demonstrate that certain attention heads are "causally sufficient" for abstract reasoning tasks by showing that perturbing their outputs predictably alters model responses.

## Sources

**[Function Vectors in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4ae163cb8788970e53b4fd9578141139-Paper-Conference.pdf)**
> A statistical method used to identify and quantify the causal role of specific model components, such as attention heads, in mediating the relationship between an input and an output.

**[HeadMap: Locating and Enhancing Knowledge Circuits in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/52fc02778520b240c57046b3f7588ba1-Paper-Conference.pdf) (as "Causal Mediation Analysis")**
> A statistical method referenced from prior work used to interpret the mechanisms of LLMs by analyzing the causal effects of model components on outputs.

## Relationships

### → Causal mediation analysis
- **Algebraic rule induction** (behaviors tasks) — *measured_by*
  > The causal mediation analyses in section 3.1 demonstrate that the identified attention heads are causally sufficient, in the sense that perturbing their outputs alters the model’s responses in a predictable manner. (Section 3.4)
  - [Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25c/yang25c.pdf)
