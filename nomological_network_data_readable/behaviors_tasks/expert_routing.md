# Expert routing
**Type:** Behavior  
**Referenced in:** 19 papers  
**Also known as:** Model routing, Sequence routing, Cross-lingual routing, Token-expert routing, Expert activation  

## State of the Field

Expert routing is most commonly described as the behavior of selecting and activating specific expert sub-networks within a model to process inputs. The prevailing operationalization of this behavior occurs at the token level, where a "router" or "gating network" assigns individual tokens to one or more experts, often based on similarity in the hidden space. Some work distinguishes between routing decisions made independently at each layer and those made sequentially, where one layer's assignments condition the next. A smaller body of work conceptualizes routing at a coarser granularity, such as "sequence routing," where an entire input sequence is assigned to a single expert, or "model routing," where a whole evaluation instance is directed to one of several distinct foundation models. This behavior is typically observed and analyzed through "routing scores," which, as one study notes, "facilitates mechanistic interpretability by enabling observations of fine-grained experts' routing patterns" (Monet: Mixture of Monosemantic Experts for Transformers). The stated function of this mechanism can also be to enable knowledge transfer, as in "cross-lingual routing," which allows "knowledge to propagate across languages" (Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts).

## Sources

**[Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf)**
> The pattern of selecting and activating specific experts for given inputs, observable through routing scores.

**[No Need to Talk: Asynchronous Mixture of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ae2d3297891cad0c56dd12d60ff7dde-Paper-Conference.pdf) (as "Sequence routing")**
> Assigning an input sequence to a single expert based on a short prefix or other routing signal.

**[Unearthing Skill-level Insights for Understanding Trade-offs of Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5526c73e3ff4f2a34009e13d15f52fcb-Paper-Conference.pdf) (as "Model routing")**
> Assigning each evaluation instance to one of several models based on the skills relevant to that instance.

**[Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1551c01d7a3d0bf21e2518331e9f7074-Paper-Conference.pdf) (as "Cross-lingual routing")**
> An observable internal model behavior where input tokens from one language are processed by experts designated for other languages within a Mixture-of-Experts architecture.

**[Layerwise Recurrent Router for  Mixture-of-Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/250a6c6a7a7216f5dec1364e9a93abf4-Paper-Conference.pdf) (as "Token routing")**
> Producing routing decisions that map each token to experts across layers in a Mixture-of-Experts model.

**[Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf) (as "Token-expert routing")**
> Assigning input tokens to one or more experts based on similarity or transformed similarity in the hidden space.

**[Dynamic Mixture of Experts: An Auto-Tuning Approach for Efficient Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c63ff34c163bca3055d39490f6d1aaf7-Paper-Conference.pdf) (as "Expert activation")**
> The observable mechanism where the model selects and activates specific expert sub-networks for processing individual tokens.

## Relationships

### Expert routing →
- **Scalability** (constructs) — *causes*
  > MH-MoE can alleviate lower expert activation problem and significantly enhance the usage of larger experts by enabling optimization of almost all of experts, allowing for more efficient scaling of model capacity.
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > This coarse-to-fine paradigm effectively leverages representations from experts based on multimodal context and model expertise, further enhancing the generalization ability.
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)

### → Expert routing
- **Scalability** (constructs) — *causes*
  > “MH-MoE can alleviate lower expert activation problem and significantly enhance the usage of larger experts by enabling optimization of almost all of experts, allowing for more efficient scaling of model capacity”
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > "This coarse-to-fine paradigm effectively leverages representations from experts based on multimodal context and model expertise, further enhancing the generalization ability."
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
